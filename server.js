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

//CONCERTS
app.get("/concerts", (req, res) => {
  res.json(concerts);
});

app.get("/concerts/:id", (req, res) => {
  res.json(concerts[req.params.id - 1]);
});

app.post("/concerts", (req, res) => {
  const { performer, genre, price, day, image } = req.body;
  const id = randomID();
  const newConcert = { id, performer, genre, price, day, image };
  concerts.push(newConcert);
  res.json({ message: "OK" });
});

app.delete("/concerts/:id", (req, res) => {
  const id = req.params.id - 1;
  testimonials.splice(concerts[id], 1);
  res.json({ message: "OK" });
});

app.put("/concerts/:id", (req, res) => {
  const { performer, genre, price, day, image } = req.body;
  const id = req.params.id - 1;
  const concert = concerts[id];
  concert.performer = performer;
  concert.genre = genre;
  concert.price = price;
  concert.day = day;
  concert.image = image;
  res.json({ message: "OK" });
});

//REST
app.use((req, res) => {
  res.status(404).json("404 not found...");
});

app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});
