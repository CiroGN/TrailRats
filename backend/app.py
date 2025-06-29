from flask import Flask
from flask_cors import CORS
from routes.register import register_bp
from routes.login import login_bp
from routes.trail import trail_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(register_bp)
app.register_blueprint(login_bp)
app.register_blueprint(trail_bp)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
