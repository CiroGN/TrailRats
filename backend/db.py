import mysql.connector
from dotenv import load_dotenv
import os

# Carrega as variáveis do .env
load_dotenv()

def get_connection():
    return mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME")
    )
if __name__ == "__main__":
    try:
        conn = get_connection()
        print("✅ Conexão com o MySQL bem-sucedida!")
        conn.close()
    except Exception as e:
        print("❌ Erro na conexão:", e)
