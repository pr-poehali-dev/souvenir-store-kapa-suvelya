import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def handler(event: dict, context) -> dict:
    '''Отправка email уведомлений о заказах'''
    method = event.get('httpMethod', 'POST')

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

    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', 587))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    notification_email = os.environ.get('NOTIFICATION_EMAIL')

    if not all([smtp_host, smtp_user, smtp_password, notification_email]):
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Email configuration missing'})
        }

    try:
        body_data = json.loads(event.get('body', '{}'))
        order_data = body_data.get('order', {})
        
        customer_name = order_data.get('customer_name', 'Не указано')
        customer_phone = order_data.get('customer_phone', 'Не указано')
        customer_email = order_data.get('customer_email', 'Не указано')
        delivery_method = order_data.get('delivery_method', 'pickup')
        delivery_address = order_data.get('delivery_address', '')
        items = order_data.get('items', [])
        total_amount = order_data.get('total_amount', 0)

        delivery_text = {
            'pickup': 'Самовывоз',
            'delivery': f'Доставка курьером по адресу: {delivery_address}',
            'transport': f'Доставка транспортной компанией по адресу: {delivery_address}'
        }.get(delivery_method, 'Не указано')

        items_html = ''
        for item in items:
            items_html += f"<tr><td>{item.get('name', '')}</td><td>{item.get('quantity', 0)} шт.</td><td>{item.get('price', 0):,} ₽</td></tr>"

        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #8b7355;">Новый заказ на сайте!</h2>
                
                <h3>Контактные данные:</h3>
                <p><strong>Имя:</strong> {customer_name}</p>
                <p><strong>Телефон:</strong> {customer_phone}</p>
                <p><strong>Email:</strong> {customer_email}</p>
                
                <h3>Доставка:</h3>
                <p>{delivery_text}</p>
                
                <h3>Состав заказа:</h3>
                <table style="border-collapse: collapse; width: 100%; margin-top: 10px;">
                    <thead>
                        <tr style="background-color: #f4f4f4;">
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Товар</th>
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Количество</th>
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items_html}
                    </tbody>
                </table>
                
                <h3 style="margin-top: 20px;">Итого: {total_amount:,} ₽</h3>
            </body>
        </html>
        """

        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Новый заказ от {customer_name}'
        msg['From'] = smtp_user
        msg['To'] = notification_email

        html_part = MIMEText(html_content, 'html', 'utf-8')
        msg.attach(html_part)

        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)

        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': True, 'message': 'Email sent successfully'})
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)})
        }
