const express = require("express");
const randomID = require("@warta/randomid--enerator");
const db = require("./db");

const testimonials = db.testimonials;
const seats = db.seats;
const concerts = db.concerts;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//TESTIMONIALS
app.get("/testimonials", (req, res) => {
  res.send(testimonials);
});

app.get("/testimonials/:id", (req, res) => {
  res.send(testimonials[req.params.id - 1]);
});

app.get("/testimonials/random", (req, res) => {
  res.send(testimonials[Math.floor(Math.random() * testimonials.length)]);
});

app.post("/testimonials", (req, res) => {
  const { author, text } = req.body;
  const id = randomID(20);
  const newTestimonials = { id, author, text };
  testimonials.push(newTestimonials);
  res.json({ message: "OK" });
});

app.put("/testimonials/:id", (req, res) => {
  const { author, text } = req.body;
  const id = req.params.id - 1;
  const testimonial = testimonials[id];
  testimonial.author = author;
  testimonial.text = text;
  res.json({ message: "OK" });
});

app.delete("/testimonials/:id", (req, res) => {
  const id = req.params.id - 1;
  testimonials.splice(testimonials[id]);
  res.json({ message: "ok" });
});

//SEATS
app.get("/seats", (req, res) => {
  res.send(seats);
});

app.get("/seats/:id", (req, res) => {
  res.send(seats[req.params.id - 1]);
});

app.get("/seats/random", (req, res) => {
  res.send(seats[Math.floor(Math.random() * seats.length)]);
});

app.post("/seats", (req, res) => {
  const { day, seat, client, email } = req.body;
  const id = randomID(20);
  const newSeat = { id, day, seat, client, email };
  seats.push(newSeat);
  res.json({ message: "OK" });
});

app.put("/seats/:id", (req, res) => {
  const { day, seat, client, email } = req.body;
  const id = req.params.id - 1;
  const editSeat = seats[id];
  editSeat.day = day;
  editSeat.seat = seat;
  editSeat.client = client;
  editSeat.email = email;
  res.json({ message: "OK" });
});

// app.ge

//CONCERTS

//REST
app.use((req, res) => {
  res.status(404).json("404 not found...");
});

app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});
