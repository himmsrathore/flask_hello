from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello():
    if request.method == 'POST':
        try:
            num1 = int(request.form['num1'])
            num2 = int(request.form['num2'])
            total = num1 + num2
            return f"Number 1: {num1}, Number 2: {num2}, Sum: {total} <br><a href='/'>Back</a>"
        except ValueError:
            return "Invalid input. Please enter integers. <br><a href='/'>Back</a>"
            
    return '''
        <form method="post">
            <label for="num1">Number 1:</label>
            <input type="number" id="num1" name="num1" required><br><br>
            <label for="num2">Number 2:</label>
            <input type="number" id="num2" name="num2" required><br><br>
            <input type="submit" value="Calculate Sum">
        </form>
    '''

if __name__ == '__main__':
    app.run(debug=True)
