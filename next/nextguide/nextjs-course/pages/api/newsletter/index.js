import { MongoClient } from "mongodb";

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

    const mongoUrl =
      "mongodb+srv://igorTest:gasUlyAXpkgEBW8b@cluster0.zdkav.mongodb.net/events?retryWrites=true&w=majority";
    const client = await MongoClient.connect(mongoUrl);
    const db = client.db();
    await db.collection("newsletter").insertOne({ email: userEmail });

    client.close();

    res.status(201).json({ message: "Signed UP!" });
  }
}
export default handler;
