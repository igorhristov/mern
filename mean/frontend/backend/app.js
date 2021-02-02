const express = require("express");

const app = express();

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
