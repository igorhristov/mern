const express = require("express");
const mongoose = require("mongoose");
const config = {
  autoIndex: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const app = express();

const Post = require("./models/post");
mongoose
  .connect(
    "mongodb+srv://igormongo:<pass>@cluster0.zfxxz.mongodb.net/node-angular?retryWrites=true&w=majority",
    config
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

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
  // const post = req.body;
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post.save().then((createdPost) => {
    //201 is new resorce is created
    res.status(201).json({
      message: "Post added successufuly",
      postId: createdPost._id,
    });
  });
});

app.get("/api/posts", (req, res, next) => {
  Post.find().then((documents) => {
    res
      .status(200)
      .json({ message: "Posts fetched succesfully!", posts: documents });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log('post deleteed');
  });
  res.status(200).json({ message: "Post Deleted!" });
});

module.exports = app;
