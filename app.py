from flask import Flask, render_template
import pymongo

app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.happiness
collection = db.collection


@app.route("/")
def index():
    # write a statement that finds all the items in the db and sets it to a variable
    world_happiness = list(collection.find())
    print(world_happiness)

    # render an index.html template and pass it the data you retrieved from the database
    return render_template("index.html", world_happiness = world_happiness)


if __name__ == "__main__":
    app.run(debug=True)
