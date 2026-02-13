from flask import Flask, jsonify
import random

app = Flask(__name__)

# Your assistant IDs
assistants = [
    "asst_abc123",
    "asst_def456",
    "asst_ghi789",
    "asst_jkl012"
]

@app.route("/random_assistant", methods=["GET"])
def random_assistant():
    selected = random.choice(assistants)
    return jsonify({"assistantId": selected})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
