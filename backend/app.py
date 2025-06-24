from flask import Flask
from flask_cors import CORS
from routes.auth import auth
from routes.register import register_bp
from routes.login import login_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth, url_prefix="/api")
app.register_blueprint(register_bp)
app.register_blueprint(login_bp)

if __name__ == "__main__":
    app.run(debug=True)
