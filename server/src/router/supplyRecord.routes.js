const { Router } = require("express");
const router = Router();

const {
  addSupplyRecord,
  getSupplyRecordBySupID,
  editSupplyRecord,
  deleteSupplyRecordrByID,
  getSupplyRecords,
} = require("../controller/supplyRecord.controller");

router.post("/create", addSupplyRecord);
router.post("/createGood", addNewGood);   //TO IMPL
router.get("/single/:supId", getSupplyRecordBySupID);
router.get("/all", getSupplyRecords);
router.patch("/edit/:srId", editSupplyRecord);
router.delete("/remove/:id", deleteSupplyRecordrByID);





module.exports.supplyRecordRouter = router;