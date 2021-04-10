function handler(req, res) {
  const eventId = req.query.eventId;
  console.log(eventId);

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
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);

    res.status(201).json({ message: "Added comment", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "igor", text: "first comment" },
      { id: "c2", name: "Ale", text: "second comment" },
      { id: "c3", name: "OL", text: "third comment" },
    ];

    res.status(200).json({ comments: dummyList });
  }
}

export default handler;
