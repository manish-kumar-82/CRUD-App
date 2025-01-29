const express = require("express");
const cors = require("cors");
const app = express();
const connectToMongo = require("./db/conn");
const userModel = require("./models/data");
const MONGODB_URL = process.env.MONGODB_URL;
connectToMongo(MONGODB_URL);

const router = require("./routers/data");
app.use(cors());
app.use(express.json());
app.use("/", router);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
