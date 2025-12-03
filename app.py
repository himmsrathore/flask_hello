from flask import Flask
import random

app = Flask(__name__)

@app.route('/')
def hello():
    num1 = random.randint(1, 100)
    num2 = random.randint(1, 100)
    total = num1 + num2
    return f"Number 1: {num1}, Number 2: {num2}, Sum: {total}"

if __name__ == '__main__':
    app.run(debug=True)
