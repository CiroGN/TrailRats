from flask import Blueprint, request, jsonify
from db import get_connection

trail_bp = Blueprint('trail', __name__)

@trail_bp.route('/trail', methods=['POST'])
def cadastrar_trilha():
    data = request.get_json()

    name = data.get('trailName')
    difficulty = data.get('difficulty')
    danger = data.get('danger')
    distance = data.get('distance')
    time = data.get('time')
    assistencia = data.get('assistencia')
    precisaGuia = data.get('precisaGuia')
    idosos = data.get('idosos')
    criancas = data.get('criancas')

    if not name:
        return jsonify({'sucesso': False, 'mensagem': 'Nome da trilha é obrigatório'}), 400

    try:
        conn = get_connection()
        cursor = conn.cursor()

        query = """
        INSERT INTO trails (name, difficulty, danger, distance_km, duration_h, has_assistance, requires_guide, suitable_for_elders, suitable_for_children)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
        values = (
            name,
            difficulty,
            danger,
            float(distance),
            float(time),
            assistencia,
            precisaGuia,
            idosos,
            criancas
        )

        cursor.execute(query, values)
        conn.commit()

        return jsonify({'sucesso': True, 'mensagem': 'Trilha cadastrada com sucesso!'}), 201

    except Exception as e:
        print('Erro ao cadastrar trilha:', e)
        return jsonify({'sucesso': False, 'mensagem': 'Erro no servidor'}), 500
    finally:
        cursor.close()
        conn.close()
