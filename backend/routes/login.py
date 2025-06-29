from flask import Blueprint, request, jsonify
from db import get_connection
import bcrypt

login_bp = Blueprint('login', __name__)

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

        # Buscamos o hash da senha do usuário pelo nome
        cursor.execute("SELECT password FROM users WHERE name = %s", (nome,))
        resultado = cursor.fetchone()

        if not resultado:
            return jsonify({'sucesso': False, 'mensagem': 'Usuário não encontrado'}), 401

        senha_hash_db = resultado[0]

        # Verificamos se a senha digitada corresponde ao hash salvo
        if bcrypt.checkpw(senha_digitada.encode('utf-8'), senha_hash_db.encode('utf-8')):
            return jsonify({'sucesso': True}), 200
        else:
            return jsonify({'sucesso': False, 'mensagem': 'Senha incorreta'}), 401

    except Exception as e:
        print("Erro:", e)
        return jsonify({'sucesso': False, 'mensagem': 'Erro no servidor'}), 500
    finally:
        cursor.close()
        conn.close()
