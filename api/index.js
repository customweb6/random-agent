export default function handler(req, res) {
  // Your real Assistant IDs from Vapi Dashboard
  const assistants = [
    "asst_abc123", 
    "asst_def456",
    "asst_ghi789"
  ];

  const selectedId = assistants[Math.floor(Math.random() * assistants.length)];

  // This sends ONLY the JSON Vapi needs
  res.status(200).json({
    assistantId: selectedId
  });
}
