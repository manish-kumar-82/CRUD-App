const express = require("express");
const cors = require("cors");
const app = express();
const connectToMongo = require("./db/conn");
connectToMongo();

const router = require("./routers/data");
app.use(cors());
app.use(express.json());
app.use("/", router);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
