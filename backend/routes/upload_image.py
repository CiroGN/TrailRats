import os
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from db import get_connection

upload_bp = Blueprint('upload', __name__)
UPLOAD_FOLDER = 'uploads'

# Cria o diretório se não existir
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@upload_bp.route('/upload_imagem', methods=['POST'])
def upload_imagem():
    trail_id = request.form.get('trail_id')
    imagens = request.files.getlist('imagens')  # múltiplas imagens

    if not trail_id or not imagens:
        return jsonify({'sucesso': False, 'mensagem': 'ID da trilha ou imagens ausentes'}), 400

    try:
        conn = get_connection()
        cursor = conn.cursor()

        for imagem in imagens:
            filename = secure_filename(imagem.filename)
            caminho = os.path.join(UPLOAD_FOLDER, filename)
            imagem.save(caminho)

            # Salva o caminho no banco
            cursor.execute("INSERT INTO images (trail_id, path) VALUES (%s, %s)", (trail_id, caminho))

        conn.commit()
        return jsonify({'sucesso': True, 'mensagem': 'Imagens salvas com sucesso'}), 201

    except Exception as e:
        print("Erro ao salvar imagem:", e)
        return jsonify({'sucesso': False, 'mensagem': 'Erro ao salvar imagem'}), 500
    finally:
        cursor.close()
        conn.close()
