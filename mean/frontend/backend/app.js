const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );

  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);

  //201 is new resorce is created
  res.status(201).json({
    message: "Post added successufuly",
  });
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "adfadsfew",
      title: "First Server Post",
      content: "this is coming from server",
    },
    {
      id: "sfae4asdf",
      title: "Second Server Post",
      content: "this is coming from server 2",
    },
    {
      id: "kf6djhn,",
      title: "Third Server Post",
      content: "this is coming from server 3",
    },
  ];

  res.status(200).json({ message: "Posts fetched succesfully!", posts: posts });
});

module.exports = app;
