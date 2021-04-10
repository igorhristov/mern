import { buildFeedbackPath, extractFeedback } from "./index";

function handler(req, res) {
  if (req.method === "DELETE") {
    ///
  }

  const feedbackId = req.query.feedbackId;

  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);

  const selectedUSerfromFeedback = feedbackData.find(
    (user) => user.id === feedbackId
  );

  res.status(200).json({ feedback: selectedUSerfromFeedback });
}

export default handler;
