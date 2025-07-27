from flask import Flask
from flask_cors import CORS
from routes.register import register_bp
from routes.login import login_bp
from routes.trail import trail_bp
from routes.upload_image import upload_bp
from routes.feed import feed_bp
from routes.trail_details import trail_details_bp
from flask import send_from_directory
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'

@app.route('/uploads/<path:filename>')
def get_upload(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

app.register_blueprint(register_bp)
app.register_blueprint(login_bp)
app.register_blueprint(trail_bp)
app.register_blueprint(upload_bp)
app.register_blueprint(feed_bp)
app.register_blueprint(trail_details_bp)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
