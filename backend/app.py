from flask import Flask
from flask_cors import CORS
from routes.auth import auth

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth, url_prefix="/api")

if __name__ == "__main__":
    app.run(debug=True)
