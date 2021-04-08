import fs from "fs";
import path from "path";


function handler(req, res) {
  if (req.method === "POST") {
    const name = req.body.name;
    const email = req.body.email;
    const messageText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      name: name,
      email: email,
      text: messageText,
    };
    //store new feedback in a database

    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success", feedback: newFeedback });
  } else {
    res.status(200).json({ message: "hello from api feedback" });
  }
}

export default handler;
