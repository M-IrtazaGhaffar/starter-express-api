const express = require("express");
const app = express();
const port = 5000;

// Routes
app.get("/", (req, res) => res.send("Hello World!"));

// Listening
app.listen(port, () => console.log(`App listening on port ${port}!`));