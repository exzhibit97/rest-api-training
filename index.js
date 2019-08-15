const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "OPTIONS", "PATCH", "DELETE"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization"
    ],
    credentials: true
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require("./src/routers/api"));

app.listen(port, () => {
  console.log(`Server is running live on port: ${port}`);
});
