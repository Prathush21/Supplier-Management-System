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

    const supplierSql = "SELECT * FROM Supplier WHERE name LIKE ?";
    db.query(supplierSql, [name], (err, result) => {
      res.send(result);
    });
  } catch (error) {}
};

const getSupplierByID = (req, res) => {
  try {
    const supplierSql = "SELECT * FROM Supplier WHERE ID = ?";
    db.query(supplierSql, [req.params.id], (err, result) => {
      res.send(result);
    });
  } catch (error) {}
};

const getSuppliers = (req, res) => {
  try {
    const supplierSql = "SELECT * FROM Supplier";
    db.query(supplierSql, [req.params.id], (err, result) => {
      res.send(result);
    });
  } catch (error) {}
};

const deleteSupplierByID = (req, res) => {
  try {
    const supplierSql = "DELETE FROM Supplier WHERE ID = ?";
    db.query(supplierSql, [req.params.id], (err, result) => {
      if (result.affectedRows) {
        res.send("Supplier Deleted...");
      }
    });
  } catch (error) {}
};

const editSupplier = (req,res)=>{
    try {
        const supplierUpdates = req.body;
        const allowedUpdates = [
          "name",
          "email",
          "Joined_date",
          "photo",
          "Line1",
          "Line2",
          "City",
          "District",
          "Postal_Code",
        ];
        requestedUpdates = {};

    } catch (error) {
        
    }

}

module.exports = {
  addSupplier,
  getSupplierByName,
  getSupplierByID,
  getSuppliers,
  deleteSupplierByID,
};
