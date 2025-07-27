import os
from flask import Blueprint, request, jsonify
from db import get_connection
import bcrypt
import jwt
import datetime
from dotenv import load_dotenv

load_dotenv()

login_bp = Blueprint('login', __name__)
SECRET_KEY = os.getenv("SECRET_KEY")  # Coloque isso no seu .env: SECRET_KEY=algumasecretasegura

@login_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    nome = data.get('nome')
    senha_digitada = data.get('senha')

    if not nome or not senha_digitada:
        return jsonify({'sucesso': False, 'mensagem': 'Campos obrigatórios'}), 400

    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT id, password FROM users WHERE name = %s", (nome,))
        user = cursor.fetchone()

        if not user:
            return jsonify({'sucesso': False, 'mensagem': 'Usuário não encontrado'}), 404

        user_id, senha_hash_db = user

        if bcrypt.checkpw(senha_digitada.encode('utf-8'), senha_hash_db.encode('utf-8')):
            # Geração do token JWT
            token = jwt.encode({
                'user_id': user_id,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
            }, SECRET_KEY, algorithm='HS256')

            return jsonify({'sucesso': True, 'token': token, 'user_id': user_id}), 200
        else:
            return jsonify({'sucesso': False, 'mensagem': 'Senha incorreta'}), 401

    except Exception as e:
        print("Erro:", e)
        return jsonify({'sucesso': False, 'mensagem': 'Erro no servidor'}), 500
    finally:
        cursor.close()
        conn.close()
