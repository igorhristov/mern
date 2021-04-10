import { MongoClient } from "mongodb";

async function connectDatabase() {
  const mongoUrl =
    "mongodb+srv://igorTest:gasUlyAXpkgEBW8b@cluster0.zdkav.mongodb.net/events?retryWrites=true&w=majority";
  const client = await MongoClient.connect(mongoUrl);
  return client;
}

async function insertDocument(client, document) {
  const db = client.db();
  await db.collection("newsletter").insertOne(document);
}

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    // const mongoUrl =
    //   "mongodb+srv://igorTest:gasUlyAXpkgEBW8b@cluster0.zdkav.mongodb.net/newsletter?retryWrites=true&w=majority";

    // const client = await MongoClient.connect(mongoUrl);
    // const db = client.db();
    // await db.collection("emails").insertOne({ email: userEmail });
    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the dateabase failed!" });
      return;
    }

    try {
      await insertDocument(client, { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Signed UP!" });
  }
}
export default handler;
