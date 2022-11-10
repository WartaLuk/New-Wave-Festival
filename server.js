const express = require("express");
const randomID = require("@warta/randomid--enerator");

const db = [
  { id: 1, author: "John Doe", text: "This company is worth every coin!" },
  {
    id: 2,
    author: "Amanda Doe",
    text: "They really know how to make you happy.",
  },
];

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/testimonials", (req, res) => {
  res.send(db);
});

app.get("/testimonials/:id", (req, res) => {
  res.send(db[req.params.id - 1]);
});

app.get("/testimonials/random", (req, res) => {
  res.send(db[Math.floor(Math.random() * db.length)]);
});

app.post("/testimonials", (req, res) => {
  const { author, text } = req.body;
  const id = randomID(20);
  const newTestimonials = { id, author, text };
  db.push(newTestimonials);
  res.json({ message: "OK" });
});

app.put("/testimonials/:id", (req, res) => {
  const { author, text } = req.body;
  const id = req.params.id - 1;
  const testimonial = db[id];
  testimonial.author = author;
  testimonial.text = text;
  res.json({ message: "OK" });
});

app.delete("/testimonials/:id", (req, res) => {
  const id = req.params.id - 1;
  db.splice(db[id]);
  res.json({ message: "ok" });
});

app.use((req, res) => {
  res.status(404).json("404 not found...");
});

app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});
