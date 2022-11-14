const express = require("express");
const cors = require("cors");

//IMPORT ROUTES
const testimonialsRoutes = require("./routes/testimonials.routes");
const seatsRoutes = require("./routes/seats.routes");
const concertsRoutes = require("./routes/concerts.routes");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/api/", testimonialsRoutes);
app.use("/api", concertsRoutes);
app.use("/api", seatsRoutes);

app.use((req, res) => {
  res.status(404).json("404 not found...");
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port: 8000");
});
