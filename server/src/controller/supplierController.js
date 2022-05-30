const db = require("../db/db");

const addSupplier = (req, res) => {
  try {
    const supplier = req.body;
    console.log(supplier);
    supplierSql =
      "INSERT INTO Supplier (name, email,Joined_date,photo) VALUES (?, ?, ?, ?);";
    db.query(
      supplierSql,
      [supplier.name, supplier.email, new Date(), supplier.photo],
      (err, result) => {
        if (result.affectedRows) {
          console.log(result);
          addressSql =
            "INSERT INTO Address (Line1, Line2,City,District,Postal_Code,supplierID) VALUES (?, ?, ?, ?,?,?);";
          db.query(
            addressSql,
            [
              supplier.line1,
              supplier.line2,
              supplier.city,
              supplier.district,
              supplier.Postal_Code,
              result.insertId,
            ],
            (err, result) => {
              if (result.affectedRows) {
                res.send("Supplier Added");
              }
            }
          );
        }
      }
    );
  } catch (error) {
    res.status(400).send(error);
  }
};

const getSupplierByName = (req, res) => {
  try {
    const searchName = req.body.searchName;
    const name = "%" + searchName + "%";

    const supplierSql =
      "SELECT * FROM Supplier INNER JOIN Address ON Supplier.sID=Address.supplierID WHERE name LIKE ?";
    db.query(supplierSql, [name], (err, result) => {
      res.send(result);
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getSupplierByID = (req, res) => {
  try {
    const supplierSql =
      "SELECT * FROM Supplier INNER JOIN Address ON Supplier.sID=Address.supplierID WHERE Supplier.sID = ?";
    db.query(supplierSql, [req.params.id], (err, result) => {
      res.send(result);
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getSuppliers = (req, res) => {
  try {
    const supplierSql =
      "SELECT * FROM Supplier INNER JOIN Address ON Supplier.sID=Address.supplierID";
    db.query(supplierSql, [req.params.id], (err, result) => {
      res.send(result);
      console.log(result)
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteSupplierByID = (req, res) => {
  try {
    const supplierSql = "DELETE FROM Supplier WHERE sID = ?";
    db.query(supplierSql, [req.params.id], (err, result) => {
      if (result.affectedRows) {
        res.send("Supplier Deleted...");
      }
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const editSupplier = (req, res) => {
  try {
    const supplierID = req.params.id;
    const supplierUpdates = req.body;
    const allowedUpdates = [
      "name",
      "email",
      "joined_date",
      "photo",
      "line1",
      "line2",
      "city",
      "district",
      "postal_Code",
    ];
    requestedUpdates = {};
    allowedUpdates.forEach((update) => {
      if (supplierUpdates[update]) {
        requestedUpdates[update] = supplierUpdates[update];
      }
    });

    const supplierSql =
      "UPDATE Supplier SET name= ? , email = ? , Joined_date = ? , photo = ? WHERE sID = ?";
    db.query(
      supplierSql,
      [
        requestedUpdates.name,
        requestedUpdates.email,
        requestedUpdates.Joined_date,
        requestedUpdates.photo,
        supplierID,
      ],
      (err, result) => {
        if (result.affectedRows) {
          const supplierSql =
            "UPDATE Address SET line1= ? , line2 = ? , city = ? , district = ? , postal_Code = ? WHERE supplierID = ?";
          db.query(
            supplierSql,
            [
              requestedUpdates.line1,
              requestedUpdates.line2,
              requestedUpdates.city,
              requestedUpdates.district,
              requestedUpdates.postal_Code,
              supplierID,
            ],
            (err, result) => {
              if (result.affectedRows) {
                res.send("Successfully Updated...");
              } else {
                res.send("Not Updated...");
              }
            }
          );
        } else {
          res.send("Not Updated...");
        }
      }
    );
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  addSupplier,
  getSupplierByName,
  getSupplierByID,
  getSuppliers,
  deleteSupplierByID,
  editSupplier,
};
