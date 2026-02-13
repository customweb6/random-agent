export default function handler(req, res) {
  // 1. Vapi sends a POST request. We handle that or any request for simplicity.
  const assistants = [
    "asst_abc123", // Replace with your real IDs
    "asst_def456",
    "asst_ghi789"
  ];

  // 2. Random selection logic
  const selectedId = assistants[Math.floor(Math.random() * assistants.length)];

  // 3. Return the JSON with the key "assistantId"
  // We use status 201 (Created) as recommended for Vapi assistant-requests
  res.status(201).json({
    assistantId: selectedId
  });
}
