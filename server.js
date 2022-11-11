const express = require("express");
const randomID = require("@warta/randomid--enerator");
const db = require("./db")

const testimonials = db.testimonials;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/testimonials", (req, res) => {
  res.send(testimonials);
});

app.get("/testimonials/:id", (req, res) => {
  res.send(testimonials[req.params.id - 1]);
});

app.get("/testimonials/random", (req, res) => {
  res.send(testimonials[Math.floor(Math.random() * db.length)]);
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
  const testimonial = testimonials[id];
  testimonial.author = author;
  testimonial.text = text
  res.json({ message: "OK" });
});

app.delete("/testimonials/:id", (req, res) => {
  const id = req.params.id - 1;
  testimonials.splice(testimonials[id]);
  res.json({ message: "ok" });
});

app.use((req, res) => {
  res.status(404).json("404 not found...");
});

app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});
