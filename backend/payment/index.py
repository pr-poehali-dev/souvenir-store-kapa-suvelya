import json
import os
import uuid
import requests
from base64 import b64encode

def handler(event: dict, context) -> dict:
    '''API для создания платежа через ЮKassa'''
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        amount = body.get('amount')
        description = body.get('description', 'Оплата заказа')
        return_url = body.get('return_url', 'https://your-site.com/success')
        
        if not amount or amount <= 0:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Invalid amount'})
            }
        
        shop_id = os.environ.get('YOOKASSA_SHOP_ID')
        secret_key = os.environ.get('YOOKASSA_SECRET_KEY')
        
        if not shop_id or not secret_key:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Payment credentials not configured'})
            }
        
        auth_string = f"{shop_id}:{secret_key}"
        auth_header = b64encode(auth_string.encode()).decode()
        
        payment_data = {
            'amount': {
                'value': f"{amount:.2f}",
                'currency': 'RUB'
            },
            'confirmation': {
                'type': 'redirect',
                'return_url': return_url
            },
            'capture': True,
            'description': description
        }
        
        headers = {
            'Authorization': f'Basic {auth_header}',
            'Idempotence-Key': str(uuid.uuid4()),
            'Content-Type': 'application/json'
        }
        
        response = requests.post(
            'https://api.yookassa.ru/v3/payments',
            headers=headers,
            json=payment_data,
            timeout=10
        )
        
        if response.status_code not in [200, 201]:
            return {
                'statusCode': response.status_code,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Payment creation failed', 'details': response.text})
            }
        
        payment_response = response.json()
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'payment_id': payment_response['id'],
                'payment_url': payment_response['confirmation']['confirmation_url'],
                'status': payment_response['status']
            })
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)})
        }
