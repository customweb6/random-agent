export default function handler(req, res) {
  // Your real Assistant IDs
  const assistants = [
    "4dd28b83-2f6d-4e63-8472-a9fee28f9566", 
    "bf751324-55aa-4240-8102-f42ba3d7ba63",
    "ca90edd3-e650-477a-af86-ed68da65d681"
  ];

  // Your Voicemail Assistant ID (Fallback)
  const voicemailId = "79ce0c4b-90da-42dc-9141-167932bdc11a";

  try {
    const selectedId = assistants[Math.floor(Math.random() * assistants.length)];

    // Vapi requires a 201 status code for assistant-request responses
    return res.status(201).json({
      assistantId: selectedId || voicemailId
    });
  } catch (error) {
    // If the code crashes for any reason, return the Voicemail ID immediately
    return res.status(201).json({
      assistantId: voicemailId
    });
  }
}
