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
app.use("/api", concertRoutes);
app.use("/api", seatsRoutes);

app.use((req, res) => {
  res.status(404).json("404 not found...");
});

app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});
