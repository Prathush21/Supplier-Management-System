const { Router } = require("express");
const router = Router();

const {
  addSupplyRecord,
  getSupplyRecordBySupID,
} = require("../controller/supplyRecord.controller");

router.post("/create", addSupplyRecord);
router.get("/:supId", getSupplyRecordBySupID);



module.exports.supplyRecordRouter = router;