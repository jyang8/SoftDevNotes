from flask import Flask, render_template, request

app = Flask(__name__)
users = {"DW":"work4"}

@app.route("/")
@app.route("/login/")
def tmplt():
    print request.headers
    return render_template("login.html")

@app.route("/authenticate/", methods=["POST"])
def auth():
    for name in users:

        if users.get(name) == request.form['user']:
            return "You're in!!"
        else:
            return "Wrong password. Try again!!"

if __name__ == "__main__":
    app.debug = True
    app.run()

