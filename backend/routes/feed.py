# routes/feed.py
from flask import Blueprint, jsonify
from db import get_connection

feed_bp = Blueprint('feed', __name__)

@feed_bp.route('/feed', methods=['GET'])
def get_feed():
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)

        cursor.execute("""
            SELECT t.id AS trail_id, t.nome AS trail_name, u.name AS usuario,
                   t.distancia AS distance, t.tempo AS time, t.dificuldade, t.perigo,
                   (SELECT image_url FROM images WHERE trail_id = t.id LIMIT 1) AS imagem_capa
            FROM trails t
            JOIN users u ON t.user_id = u.id
            ORDER BY t.id DESC
        """)
        trilhas = cursor.fetchall()
        for trilha in trilhas:
            if trilha['imagem_capa']:
                trilha['imagem_capa'] = trilha['imagem_capa'].replace('\\', '/')
        return jsonify({'sucesso': True, 'trilhas': trilhas}), 200

    except Exception as e:
        print("Erro no feed:", e)
        return jsonify({'sucesso': False, 'mensagem': 'Erro ao buscar trilhas'}), 500
    finally:
        cursor.close()
        conn.close()
