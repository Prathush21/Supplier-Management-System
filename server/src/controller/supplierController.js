const db = require("../db/db");

const addSupplier = (req, res) => {
  try {
    const supplier = req.body;
    addressSql =
      "INSERT INTO Address (Line1, Line2,City,District,Postal_Code) VALUES (?, ?, ?, ?,?);";
    db.query(
      addressSql,
      [
        supplier.line1,
        supplier.line2,
        supplier.city,
        supplier.district,
        supplier.Postal_Code,
      ],
      (err, resultAddress) => {
        if (resultAddress.affectedRows) {
          supplierSql =
            "INSERT INTO Supplier (name, email,Joined_date,photo,address) VALUES (?, ?, ?, ?,?);";
          db.query(
            supplierSql,
            [
              supplier.name,
              supplier.email,
              new Date(),
              supplier.photo,
              resultAddress.insertId,
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
      "SELECT * FROM Supplier INNER JOIN Address ON Supplier.address=Address.ID WHERE name LIKE ?";
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
      "SELECT * FROM Supplier INNER JOIN Address ON Supplier.address=Address.ID WHERE Supplier.ID = ?";
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
      "SELECT * FROM Supplier INNER JOIN Address ON Supplier.address=Address.ID";
    db.query(supplierSql, [req.params.id], (err, result) => {
      res.send(result);
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteSupplierByID = (req, res) => {
  try {
    const supplierSql = "DELETE FROM Supplier WHERE ID = ?";
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
      "UPDATE Supplier SET name= ? , email = ? , Joined_date = ? , photo = ? WHERE ID = ?";
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
          const supplierSql = "SELECT address FROM Supplier WHERE ID = ?";
          db.query(supplierSql, [req.params.id], (err, result) => {
            if (result[0]) {
              const supplierSql =
                "UPDATE Address SET line1= ? , line2 = ? , city = ? , district = ? , postal_Code = ? WHERE ID = ?";
              db.query(
                supplierSql,
                [
                  requestedUpdates.line1,
                  requestedUpdates.line2,
                  requestedUpdates.city,
                  requestedUpdates.district,
                  requestedUpdates.postal_Code,
                  result[0].address,
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
          });
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
