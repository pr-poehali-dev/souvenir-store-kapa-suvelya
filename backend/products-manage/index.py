import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: dict, context) -> dict:
    '''API для управления товарами (добавление, редактирование, удаление)'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }

    conn = None
    try:
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cursor = conn.cursor(cursor_factory=RealDictCursor)

        if method == 'GET':
            product_id = event.get('queryStringParameters', {}).get('id')
            
            if product_id:
                cursor.execute('SELECT * FROM products WHERE id = %s', (product_id,))
                product = cursor.fetchone()
                return {
                    'statusCode': 200 if product else 404,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'product': product} if product else {'error': 'Not found'}, default=str),
                    'isBase64Encoded': False
                }
            else:
                cursor.execute('SELECT * FROM products ORDER BY created_at DESC')
                products = cursor.fetchall()
                return {
                    'statusCode': 200,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'products': products}, default=str),
                    'isBase64Encoded': False
                }

        elif method == 'POST':
            body = json.loads(event.get('body', '{}'))
            
            images = body.get('images', [])
            if not images and body.get('image_url'):
                images = [body['image_url']]
            
            cursor.execute(
                '''INSERT INTO products (name, description, category, price, material, image_url, images, in_stock) 
                   VALUES (%s, %s, %s, %s, %s, %s, %s, %s) RETURNING id''',
                (body['name'], body.get('description', ''), body['category'], 
                 body['price'], body.get('material', ''), body.get('image_url', ''),
                 images, body.get('in_stock', True))
            )
            product_id = cursor.fetchone()['id']
            conn.commit()
            
            return {
                'statusCode': 201,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'id': product_id, 'message': 'Product created'}),
                'isBase64Encoded': False
            }

        elif method == 'PUT':
            body = json.loads(event.get('body', '{}'))
            product_id = body.get('id')
            
            if not product_id:
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Product ID required'}),
                    'isBase64Encoded': False
                }
            
            images = body.get('images', [])
            if not images and body.get('image_url'):
                images = [body['image_url']]
            
            cursor.execute(
                '''UPDATE products 
                   SET name = %s, description = %s, category = %s, price = %s, 
                       material = %s, image_url = %s, images = %s, in_stock = %s, updated_at = CURRENT_TIMESTAMP
                   WHERE id = %s''',
                (body['name'], body.get('description', ''), body['category'], 
                 body['price'], body.get('material', ''), body.get('image_url', ''),
                 images, body.get('in_stock', True), product_id)
            )
            conn.commit()
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'message': 'Product updated'}),
                'isBase64Encoded': False
            }

        elif method == 'DELETE':
            product_id = event.get('queryStringParameters', {}).get('id')
            
            if not product_id:
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Product ID required'}),
                    'isBase64Encoded': False
                }
            
            cursor.execute('DELETE FROM products WHERE id = %s', (product_id,))
            conn.commit()
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'message': 'Product deleted'}),
                'isBase64Encoded': False
            }

        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }

    except Exception as e:
        if conn:
            conn.rollback()
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }
    finally:
        if conn:
            conn.close()