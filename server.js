const express = require("express");
const randomID = require("@warta/randomid--enerator");
const db = require("./db");
const cors = require("cors");

const concerts = db.concerts;

//IMPORT ROUTES
const testimonialsRoutes = require("./routes/testimonials.routes.js");
const seatsRoutes = require("./routes/seats.routes.js");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/api/", testimonialsRoutes);



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
