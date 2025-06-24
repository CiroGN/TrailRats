from flask import Blueprint, request, jsonify
from db import get_connection
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from db import get_connection

register_bp = Blueprint('register', __name__)
load_dotenv()

app = Flask(__name__)
CORS(app)

@register_bp.route('/cadastrar', methods=['POST'])
def cadastrar():
    data = request.get_json()
    nome = data.get('nome')
    email = data.get('email')
    senha = data.get('senha')

    if not nome or not email or not senha:
        return jsonify({'sucesso': False, 'mensagem': 'Campos obrigatórios'}), 400

    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT id FROM users WHERE email = %s", (email,))
        if cursor.fetchone():
            return jsonify({'sucesso': False, 'mensagem': 'Email já cadastrado'}), 409

        cursor.execute("INSERT INTO users (nome, email, senha) VALUES (%s, %s, %s)", (nome, email, senha))
        conn.commit()

        return jsonify({'sucesso': True}), 201

    except Exception as e:
        print("Erro:", e)
        return jsonify({'sucesso': False, 'mensagem': 'Erro no servidor'}), 500
    finally:
        cursor.close()
        conn.close()

# Rota de login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    nome = data.get('nome')
    senha = data.get('senha')

    if not nome or not senha:
        return jsonify({'sucesso': False, 'mensagem': 'Campos obrigatórios'}), 400

    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM users WHERE nome = %s AND senha = %s", (nome, senha))
        user = cursor.fetchone()

        if user:
            return jsonify({'sucesso': True})
        else:
            return jsonify({'sucesso': False, 'mensagem': 'Nome ou senha inválidos'}), 401

    except Exception as e:
        print("Erro:", e)
        return jsonify({'sucesso': False, 'mensagem': 'Erro no servidor'}), 500
    finally:
        cursor.close()
        conn.close()

if __name__ == '__main__':
    app.run(debug=True)
