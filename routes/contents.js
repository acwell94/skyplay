const express = require("express");
const contentsControllers = require("../controllers/contentsController");

const router = express.Router();

router.get("/getAllContents", contentsControllers.getAllContents);
router.post("/flag", contentsControllers.createContents);
router.patch("/click/:cid", contentsControllers.clickContents);
module.exports = router;
