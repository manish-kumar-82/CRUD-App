const express = require("express");
const userModel = require("../models/data");
const router = express.Router();

// Create Data
router.post("/create", async (req, res) => {
  try {
    console.log(req.body);
    const data = new userModel(req.body);
    await data.save();
    res.send({
      success: true,
      message: "data save successfully",
      data: data,
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

// getsData
router.get("/", async (req, res) => {
  try {
    const data = await userModel.find();
    res.status(201).send({ success: true, data: data });
  } catch (error) {
    res.status(400).send(error);
  }
});

// getData
// router.get("/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const getData = await userModel.findById(id);
//     res.status(201).send(getData);
//   } catch (error) {
//     res.status(400).send("error is " + error);
//   }
// });

// Update Data
router.put("/update", async (req, res) => {
  try {
    const { _id, ...rest } = req.body;
    const data = await userModel.updateOne({ _id: _id}, rest );
    res.send({ success: true, message: "data update successfully", data: data });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete Data
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await userModel.findByIdAndDelete(id);
    res.send({
      success: true,
      message: "data delete successfully",
      data: data,
    });
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;
