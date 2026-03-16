from flask import Flask, render_template, request, redirect,session
import mysql.connector
import config

# Create Flask app
app = Flask(__name__)
app.secret_key = "secret123"

# Connect to MySQL database
db = mysql.connector.connect(
    host=config.DB_HOST,
    user=config.DB_USER,
    password=config.DB_PASSWORD,
    database=config.DB_NAME
)

cursor = db.cursor()

# Home Route
@app.route("/")
def home():
    return render_template("index.html")



@app.route("/register", methods=["GET","POST"])
def register():

    if request.method == "POST":

        name = request.form["name"]
        phone = request.form["phone"]
        password = request.form["password"]
        role = request.form["role"]

        sql = "INSERT INTO users (name, phone, password, role) VALUES (%s,%s,%s,%s)"
        values = (name, phone, password, role)

        cursor.execute(sql, values)
        db.commit()

        return "Registration Successful"

    return render_template("register.html")



@app.route("/login", methods=["GET","POST"])
def login():

    if request.method == "POST":

        phone = request.form["phone"]
        password = request.form["password"]

        sql = "SELECT * FROM users WHERE phone=%s AND password=%s"
        values = (phone, password)

        cursor.execute(sql, values)
        user = cursor.fetchone()

        if user:

            role = user[4]

            if role == "customer":
                return render_template("customer_dashboard.html")

            elif role == "worker":
                return render_template("worker_dashboard.html")

        else:
            return "Invalid Login"

    return render_template("login.html")


@app.route("/workers")
def workers():

    sql = """
    SELECT users.name, workers.skill, workers.experience, workers.price, workers.location
    FROM workers
    JOIN users ON workers.user_id = users.id
    """

    cursor.execute(sql)
    data = cursor.fetchall()

    return render_template("workers.html", workers=data)



@app.route("/book/<name>", methods=["GET","POST"])
def book(name):

    if request.method == "POST":

        problem = request.form["problem"]
        address = request.form["address"]
        date = request.form["date"]

        sql = """
        INSERT INTO bookings (customer_id, worker_id, problem, address, date, status)
        VALUES (1, 1, %s, %s, %s, 'pending')
        """

        values = (problem, address, date)

        cursor.execute(sql, values)
        db.commit()

        return "Booking Successful"

    return render_template("booking.html")


@app.route("/my_bookings")
def my_bookings():

    sql = """
    SELECT problem, address, date, status
    FROM bookings
    WHERE customer_id = 1
    """

    cursor.execute(sql)
    data = cursor.fetchall()

    return render_template("my_bookings.html", bookings=data)




@app.route("/worker_requests")
def worker_requests():

    sql = """
    SELECT id, problem, address, date, status
    FROM bookings
    WHERE worker_id = 1
    """

    cursor.execute(sql)
    data = cursor.fetchall()

    return render_template("worker_requests.html", requests=data)


@app.route("/accept/<int:id>")
def accept_booking(id):

    sql = "UPDATE bookings SET status='accepted' WHERE id=%s"
    cursor.execute(sql,(id,))
    db.commit()

    return redirect("/worker_requests")

@app.route("/reject/<int:id>")
def reject_booking(id):

    sql = "UPDATE bookings SET status='rejected' WHERE id=%s"
    cursor.execute(sql,(id,))
    db.commit()

    return redirect("/worker_requests")



@app.route("/logout")
def logout():

    session.clear()

    return redirect("/login")


# Run the server
if __name__ == "__main__":
    app.run(debug=True)