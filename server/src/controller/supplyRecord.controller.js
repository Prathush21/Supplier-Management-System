const db = require("../db/db");

const addSupplyRecord = (req, res) => {
  try {
    const supplyRecord = req.body;
    supplyRecordSql =
      "INSERT INTO Supplyrecord (sup_ID, unit_Prize	,amount,type,recieved_date) VALUES (?, ?, ?, ?,?);";
    db.query(
      supplyRecordSql,
      [
        supplyRecord.sup_ID,
        supplyRecord.unit_Prize,
        supplyRecord.amount,
        supplyRecord.type,
        new Date(), //TODO can add any date
      ],
      (err, result) => {
        if (result.affectedRows) {
          console.log(result);
          res.send("supplyRecord Added..");
        }
      }
    );
  } catch (error) {
    res.status(400).send(error);
  }
};

const getSupplyRecordBySupID = (req, res) => {
  try {
    const supplyRecordSql = "SELECT * FROM Supplyrecord WHERE sup_ID = ?";
    db.query(supplyRecordSql, [req.params.supId], (err, result) => {
      res.send(result);
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  addSupplyRecord,
  getSupplyRecordBySupID,
};