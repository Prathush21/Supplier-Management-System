const { Router } = require("express");
const router = Router();

const {
  addSupplier,
  getSupplierByName,
  getSupplierByID,
  getSuppliers,
  deleteSupplierByID,
  editSupplier,
} = require("../controller/supplierController");

router.post("/create", addSupplier);
router.post("/single", getSupplierByName);
router.get("/single/:id", getSupplierByID);
router.get("/all", getSuppliers);
router.delete("/remove/:id", deleteSupplierByID);
router.patch("/edit/:id", editSupplier);

module.exports.supplierRouter = router;
