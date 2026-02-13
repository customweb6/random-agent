from flask import Flask, jsonify, request
import random

app = Flask(__name__)

# List your actual Assistant IDs from the Vapi Dashboard here
assistants = [
    "asst_abc123",
    "asst_def456",
    "asst_ghi789",
    "asst_jkl012"
]

# 1. Change to POST (Vapi sends POST)
# 2. Match the endpoint to your Render URL path
@app.route("/", methods=["POST"]) 
def random_assistant():
    selected = random.choice(assistants)
    
    # 3. Return the exact key Vapi expects: "assistantId"
    return jsonify({"assistantId": selected}), 201

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
