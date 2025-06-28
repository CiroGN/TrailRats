from flask import Blueprint, request, jsonify
from db import get_connection
import bcrypt

register_bp = Blueprint('register', __name__)

@register_bp.route('/cadastro', methods=['POST'])
def cadastrar():
    data = request.get_json()
    nome = data.get('nome')
    email = data.get('email')
    senha = data.get('senha')
    hashed_pw = bcrypt.hashpw(senha.encode('utf-8'), bcrypt.gensalt())

    if not nome or not email or not senha:
        return jsonify({'sucesso': False, 'mensagem': 'Campos obrigatórios'}), 400


    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT id FROM users WHERE email = %s", (email,))
        if cursor.fetchone():
            return jsonify({'sucesso': False, 'mensagem': 'Email já cadastrado'}), 409

        cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", (nome, email, hashed_pw))
        conn.commit()

        return jsonify({'sucesso': True}), 201

    except Exception as e:
        print("Erro:", e)
        return jsonify({'sucesso': False, 'mensagem': str(e)}), 500
    finally:
        cursor.close()
        conn.close()
