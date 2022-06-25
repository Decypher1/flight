exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}


const flights = [
    {
      id: 1,
      title: "flight to Canada",
      time: "1pm",
      price: 26000,
      date: "26-06-2022",
    },
    {
      id: 2,
      title: "flight to America",
      time: "7pm",
      price: 150000,
      date: "07-10-2024",
    },
    {
      id: 3,
      title: "flight to Germany",
      time: "8am",
      price: 143000,
      date: "12-01-2023",
    },
    {
      id: 3,
      title: "flight to London",
      time: "12pm",
      price: 90000,
      date: "23-12-2022",
    }
  ];