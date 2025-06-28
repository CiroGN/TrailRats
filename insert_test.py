import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

conn = mysql.connector.connect(
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    database=os.getenv("DB_NAME")
)
cursor = conn.cursor()

sql = "INSERT INTO users (name, email) VALUES (%s, %s)"
valores = ("Aylin Teste", "aylin@trailrats.com")

try:
    cursor.execute(sql, valores)
    conn.commit()
    print("✅ Usuário inserido com sucesso!")
except Exception as e:
    print("❌ Erro ao inserir:", e)

cursor.close()
conn.close()