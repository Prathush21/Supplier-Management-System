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
        if (result != undefined && result.affectedRows) {
          console.log("supplyRecord Added..");
          const storageSql = "SELECT stID FROM Storage WHERE type = ?";
          db.query(storageSql, [supplyRecord.type], (err, result) => {
            if (!result[0]) {
              storageInsertSql =
                "INSERT INTO Storage (type, stock_amount,last_refilled_date) VALUES (?, ?, ?);";
              db.query(
                storageInsertSql,
                [supplyRecord.type, supplyRecord.amount, new Date()],
                (err, result) => {
                  if (result != undefined && result.affectedRows) {
                    res.send("Storage added...");
                  } else {
                    res.send("Storage not added...");
                  }
                }
              );
            } else if (result[0]) {
              storageInsertSql =
                "UPDATE Storage SET stock_amount= stock_amount + ? , last_refilled_date = ? WHERE type = ?";
              db.query(
                storageInsertSql,
                [supplyRecord.amount, new Date(), supplyRecord.type],
                (err, result) => {
                  if (result != undefined && result.affectedRows) {
                    res.send("Storage updated...");
                  } else {
                    res.send("Storage not added...");
                  }
                }
              );
            } else {
              res.send("Storage not added...");
            }
          });
        } else {
          res.send(err);
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

const getSupplyRecords = (req, res) => {
  try {
    const supplyRecordSql =
      "SELECT * FROM Supplyrecord ORDER BY recieved_date;";
    db.query(supplyRecordSql, [], (err, result) => {
      res.send(result);
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteSupplyRecordrByID = (req, res) => {
  try {
    const supplierSql = "DELETE FROM Supplyrecord WHERE srID = ?";
    db.query(supplierSql, [req.params.id], (err, result) => {
      if (result != undefined && result.affectedRows) {
        res.send("Supply Record  Deleted...");
      } else {
        res.send("Supply Record not Deleted...");
      }
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const editSupplyRecord = (req, res) => {
  try {
    const supplyRecordID = req.params.srId;
    ////////////////////////////////////////
    const amountSql = "SELECT amount FROM Supplyrecord WHERE srID = ?";
    db.query(amountSql, [supplyRecordID], (err, amount) => {
      if (amount[0]) {
          const supplyRecordUpdates = req.body;
          const allowedUpdates = [
            "sup_ID",
            "unit_Prize",
            "amount",
            "type", //TODO "recieved_date"
          ];
          requestedUpdates = {};
          allowedUpdates.forEach((update) => {
            if (supplyRecordUpdates[update]) {
              requestedUpdates[update] = supplyRecordUpdates[update]; //TODO update amount should update storage with the differce of the pre amount
            }
          });

          const supplierSql =
            "UPDATE Supplyrecord SET sup_ID= ? , unit_Prize = ? , amount = ? , type = ? WHERE srID = ?";
          db.query(
            supplierSql,
            [
              requestedUpdates.sup_ID,
              requestedUpdates.unit_Prize,
              requestedUpdates.amount,
              requestedUpdates.type,
              supplyRecordID,
            ],
            (err, result) => {
              if (result != undefined && result.affectedRows) {
                console.log("Supply Record Updated...");
                extraAmount = requestedUpdates.amount - amount[0].amount;
                storageInsertSql =
                  "UPDATE Storage SET stock_amount= stock_amount + ? , last_refilled_date = ? WHERE type = ?";
                db.query(
                  storageInsertSql,
                  [extraAmount, new Date(), requestedUpdates.type],
                  (err, result) => {
                    if (result != undefined && result.affectedRows) {
                      res.send("Storage updated...");
                    } else {
                      res.send("Storage not added...");
                    }
                  }
                );
              } else {
                res.send("Not Updated...");
              }
            }
          );
      } else {
          res.send("Supply record not found.")
      }
    });
    //////////////////////////////////////
    
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  addSupplyRecord,
  getSupplyRecordBySupID,
  editSupplyRecord,
  deleteSupplyRecordrByID,
  getSupplyRecords,
};
