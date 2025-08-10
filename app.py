from flask import Flask, request, jsonify, render_template
import io
import contextlib

app = Flask(__name__)

@app.route('')
def index():
    return render_template("index.html")
#test 

@app.route('/python12')
def ivx():
    return render_template("python12.html")


@app.route('/python_notes.html')
def about():
    return render_template('python_notes.html')
@app.route('/python_note3.html')
def note3():
    return render_template('python_note3.html')

#for home page
# dot means current dir (public_html)
@app.route('/home')
def home_page():
    return render_template('/index.html')  # ✅ correct



@app.route('/run', methods=['POST'])
def run():
    code = request.json.get('code')
    output = io.StringIO()

    try:
        with contextlib.redirect_stdout(output):
            exec(code, {})
        result = output.getvalue()
    except Exception as e:
        result = f"Error: {str(e)}"

    return jsonify({'output': result})

if __name__ == '__main__':
    app.run(debug=True)
