import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-util";

async function handler(req, res) {
  const eventId = req.query.eventId;

  // const mongoUrl =
  //   "mongodb+srv://igorTest:gasUlyAXpkgEBW8b@cluster0.zdkav.mongodb.net/events?retryWrites=true&w=majority";

  // const client = await MongoClient.connect(mongoUrl);
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "connection to the database failed" });
    return;
  }

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
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    // const db = client.db();
    // const result = await db.collection("comments").insertOne(newComment);
    let result;
    try {
      result = await insertDocument(client, "comments", newComment);
      //get right away id
      newComment._id = result.insertedId;
      res.status(201).json({ message: "Added comment", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "inserting comment failed" });
    }
  }

  if (req.method === "GET") {
    // const db = client.db();

    // const allComments = await db
    //   .collection("comments")
    //   .find()
    //   .sort({ _id: -1 }) // sort in desending order so latest comment is first
    //   .toArray();

    try {
      const allComments = await getAllDocuments(client, "comments", {
        _id: -1,
      });
      res.status(200).json({ comments: allComments });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed" });
    }
  }

  client.close();
}

export default handler;
