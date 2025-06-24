from flask import Flask
from flask_cors import CORS
from routes.register import register_bp

app = Flask(__name__)
CORS(app)

# app.register_blueprint(auth, url_prefix="/api")
app.register_blueprint(register_bp)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
