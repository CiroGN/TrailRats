from flask import Blueprint, jsonify
from db import get_connection

trail_details_bp = Blueprint('trail_details', __name__)

@trail_details_bp.route('/trail/<int:trail_id>', methods=['GET'])
def detalhes_trilha(trail_id):
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)

        # Dados principais da trilha
        cursor.execute("""
            SELECT t.*, u.name AS usuario
            FROM trails t
            JOIN users u ON t.user_id = u.id
            WHERE t.id = %s
        """, (trail_id,))
        trilha = cursor.fetchone()

        if not trilha:
            return jsonify({'sucesso': False, 'mensagem': 'Trilha não encontrada'}), 404

        # Imagens da trilha
        cursor.execute("SELECT image_url FROM images WHERE trail_id = %s", (trail_id,))
        imagens = [row['image_url'].replace('\\', '/') for row in cursor.fetchall()]
        trilha['imagens'] = imagens

        return jsonify({'sucesso': True, 'trilha': trilha}), 200

    except Exception as e:
        print("Erro ao buscar detalhes da trilha:", e)
        return jsonify({'sucesso': False, 'mensagem': 'Erro interno'}), 500
    finally:
        cursor.close()
        conn.close()
