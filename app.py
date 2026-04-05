from flask import Flask,render_template,abort

app=Flask(__name__)

@app.route("/")
def select_project():
    return render_template("Projects.html")
@app.route("/uras")
def uras():
    return render_template("uras.html")
@app.route("/mehmet")
def mehmet():
    return render_template("mehmet.html")
app.run(host="0.0.0.0",port=5000,debug=True)