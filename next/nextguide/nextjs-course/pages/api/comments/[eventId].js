import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const mongoUrl =
    "mongodb+srv://igorTest:gasUlyAXpkgEBW8b@cluster0.zdkav.mongodb.net/events?retryWrites=true&w=majority";

  const client = await MongoClient.connect(mongoUrl);

  if (req.method === "POST") {
    //add server-side validation
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();
    const result = await db.collection("comments").insertOne(newComment);

    //get right away id
    newComment.id = result.insertedId;

    res.status(201).json({ message: "Added comment", comment: newComment });
  }

  if (req.method === "GET") {
    const db = client.db();

    const allComments = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 }) // sort in desending order so latest comment is first
      .toArray();

    res.status(200).json({ comments: allComments });
  }

  client.close();
}

export default handler;
