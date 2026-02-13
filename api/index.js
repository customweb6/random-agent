export default function handler(req, res) {
  // Your real Assistant IDs from Vapi Dashboard
  const assistants = [
    "b4ec1744-8452-46b7-8363-eca212dab119", 
    "688d713a-dfdb-48d4-a425-6740361b650c",
  ];

  const selectedId = assistants[Math.floor(Math.random() * assistants.length)];

  // This sends ONLY the JSON Vapi needs
  res.status(200).json({
    assistantId: selectedId
  });
}
