const express = require("express");

const app = express();

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
