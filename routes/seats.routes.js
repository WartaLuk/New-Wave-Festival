const express = require("express");
const router = express.Router();
const randomID = require("@warta/randomid--enerator");
const db = require("../db");

const seats = db.seats;

router.route("/seats").get((req, res) => {
    res.send(seats);
  });
  
  router.route("/seats/:id").get((req, res) => {
    res.send(seats[req.params.id - 1]);
  });
  
  router.route("/seats/random").get((req, res) => {
    res.send(seats[Math.floor(Math.random() * seats.length)]);
  });
  
  router.route("/seats").post((req, res) => {
    const { day, seat, client, email } = req.body;
    const id = randomID(20);
    const newSeat = { id, day, seat, client, email };
    seats.push(newSeat);
    res.json({ message: "OK" });
  });
  
  router.route("/seats/:id").put((req, res) => {
    const { day, seat, client, email } = req.body;
    const id = req.params.id - 1;
    const editSeat = seats[id];
    editSeat.day = day;
    editSeat.seat = seat;
    editSeat.client = client;
    editSeat.email = email;
    res.json({ message: "OK" });
  });

  module.exports = router;