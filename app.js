require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const tokensRouter = require("./routes/tokens");

//const notFoundMiddleware = require("./middleware/not-found");
//const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send('<h1>Nebula Decentralized Library</h1><a href="/api/v1/tokens">products route</a>');
});

app.use("/api/v1/tokens", tokensRouter);

// products route

//app.use(notFoundMiddleware);
//app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
