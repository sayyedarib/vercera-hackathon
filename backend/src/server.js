import express from "express";
// import connectToDb from "./db";
import { MongoClient } from "mongodb";
const app = express();
app.use(express.json());



app.post("/hello", (req, res) => {
  const content = req.body;
  res.send(content);
});

app.put("/donation", async (req, res) => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();

  const db = client.db("hackathon");
  await db.collection("donation").updateOne("name", { $push: { name: 1 } });

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.send(`Upvotes: ${article.upvotes}`);
  } else {
    res.send("not found hahaha");
  }
});

app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();

  const db = client.db("my-blog");
  await db
    .collection("articles")
    .updateOne({ name }, { $push: { comments: { postedBy, text } } });

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.send(article.comments);
  } else {
    res.send("not found hahaha");
  }
});

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  const db = client.db("my-blog");
  const data = await db.collection("content").findOne({ name });
  res.json(data);
});

app.listen(8000, () => {
  console.log("server is working fine");
});
