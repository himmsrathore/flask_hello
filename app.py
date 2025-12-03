from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/sum', methods=['POST'])
def sum_numbers():
    try:
        data = request.get_json()
        num1 = int(data.get('num1'))
        num2 = int(data.get('num2'))
        total = num1 + num2
        return jsonify({"num1": num1, "num2": num2, "sum": total})
    except (ValueError, TypeError):
        return jsonify({"error": "Invalid input. Please enter integers."}), 400

if __name__ == '__main__':
    app.run(debug=True)
