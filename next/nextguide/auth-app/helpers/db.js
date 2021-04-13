import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const mongoUrl =
    "mongodb+srv://igorTest:gasUlyAXpkgEBW8b@cluster0.zdkav.mongodb.net/auth-demo?retryWrites=true&w=majority";
  const client = await MongoClient.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client;
}