const HttpError = require("../models/http-error");
const Contents = require("../models/contents");
const mongoose = require("mongoose");

const createContents = async (req, res, next) => {
  const createdContents = new Contents({
    title: "4",
    views: 0,
  });
  try {
    await createdContents.save();
  } catch (err) {
    console.log(err);
    next(err);
  }
  res.status(201).json({ createContents });
};

const getAllContents = async (req, res, next) => {
  let allContents;
  try {
    allContents = await Contents.find({});
  } catch (err) {
    console.log(err);
    next(err);
  }
  res.status(201).json(allContents);
};

const clickContents = async (req, res, next) => {
  const contentsId = req.params.cid;
  let foundContents;
  try {
    foundContents = await Contents.findOne({ title: contentsId });
  } catch (err) {
    console.log(err);
    next(err);
  }
  foundContents.views++;

  try {
    await foundContents.save();
  } catch (err) {
    console.log(err);
    next(err);
  }

  res.status(201).json(foundContents);
};

exports.createContents = createContents;
exports.getAllContents = getAllContents;
exports.clickContents = clickContents;
