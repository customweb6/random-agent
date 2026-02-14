export default function handler(req, res) {
  // Your real Assistant IDs from Vapi Dashboard
  const assistants = [
    "4dd28b83-2f6d-4e63-8472-a9fee28f9566", 
    "bf751324-55aa-4240-8102-f42ba3d7ba63",
    "ca90edd3-e650-477a-af86-ed68da65d681"
  ];

  const selectedId = assistants[Math.floor(Math.random() * assistants.length)];

  // This sends ONLY the JSON Vapi needs
  res.status(200).json({
    assistantId: selectedId
  });
}
