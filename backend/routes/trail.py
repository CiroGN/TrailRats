from flask import Blueprint, request, jsonify
from db import get_connection
from dotenv import load_dotenv
import jwt
import os

load_dotenv()
SECRET_KEY = os.getenv("SECRET_KEY")

trail_bp = Blueprint('trail', __name__)

@trail_bp.route('/trail', methods=['POST'])
def cadastrar_trilha():
    data = request.get_json()
    token = request.headers.get('Authorization')

    if not token:
        return jsonify({'sucesso': False, 'mensagem': 'Token JWT ausente'}), 401

    try:
        if token.startswith("Bearer "):
            token = token[7:]
        decoded = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        user_id = decoded['user_id']
    except jwt.ExpiredSignatureError:
        return jsonify({'sucesso': False, 'mensagem': 'Token expirado'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'sucesso': False, 'mensagem': 'Token inválido'}), 401

    nome = data.get('trailName')
    dificuldade = data.get('dificulty')
    perigo = data.get('danger')
    distancia = data.get('distance')
    tempo = data.get('time')
    assistencia = data.get('assistencia')
    guia = data.get('precisaGuia')
    idosos = data.get('idosos')
    criancas = data.get('criancas')

    if not nome:
        return jsonify({'sucesso': False, 'mensagem': 'Nome da trilha é obrigatório'}), 400

    try:
        conn = get_connection()
        cursor = conn.cursor()

        sql = '''
            INSERT INTO trails (
                user_id, nome, dificuldade, perigo,
                distancia, tempo, assistencia, guia,
                idosos, criancas
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        '''

        valores = (
            user_id, nome, dificuldade, perigo,
            distancia, tempo, assistencia, guia,
            idosos, criancas
        )

        cursor.execute(sql, valores)
        conn.commit()

        trail_id = cursor.lastrowid

        return jsonify({'sucesso': True, 'mensagem': 'Trilha criada com sucesso', 'trail_id': trail_id}), 201


    except Exception as e:
        print("Erro ao cadastrar trilha:", e)
        return jsonify({'sucesso': False, 'mensagem': 'Erro no servidor'}), 500

    finally:
        cursor.close()
        conn.close()
