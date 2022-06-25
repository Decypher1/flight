const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();

app.use(json());

app.use("/", routes);


app.get(flights, (req, res) => {
  res.send(flights);
});

app.post(flights, (req, res) => {
   flight = {
    id: flights.length + 1,
    title: req.body.title,
    time: req.body.time,
    price: req.body.price,
    date: req.body.date,
  }
  flights.push(flight)
  res.send(flight)
});

app.put("/flights/:id", (req, res) => {
  const flight = flights.find((c) => c.id === parseInt(req.params.id));
  if (!flight)
    return res.status(404).send("Flight Id not found!");

  flight.title = req.body.title;
  flight.time = req.body.time;
  flight.price = req.body.price;
  flight.date = req.body.date;
  res.send(flight);
});


app.get("/flights/:id", (req, res) => {
  const flight = flights.find((c) => c.id === parseInt(req.params.id));
  if (!flight)
    return res.status(404).send("Flight ID not found.");
  res.send(flight);
});

// to delete the flight
app.delete("/flights/:id", (req, res) => {
  const flight = flights.find((c) => c.id === parseInt(req.params.id));
  if (!flight)
    return res.status(404).send("Flight Id not found!");

  const index = flights.indexOf(flight);
  flights.splice(index, 1);

  res.send("flight deleted successfully");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});