const app = require("./app");
const db = require("./db/db");

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql DB connected...");
});

app.get("/", (req, res) => {
  //   let sql =
  //     "CREATE TABLE IF NOT EXISTS `Address` ( \
  //   `aID` int AUTO_INCREMENT,\
  //   `Line1` varchar(10),\
  //   `Line2` varchar(50),\
  //   `City` varchar(20),\
  //   `District` varchar(20),\
  //   `Postal_Code` varchar(10),\
  //   `supplierID` int,\
  //   PRIMARY KEY (`aID`)\
  //   ,FOREIGN KEY (supplierID) REFERENCES Supplier(sID) ON DELETE CASCADE \
  // ) ENGINE=INNODB;";
  // let sql =
  //   "CREATE TABLE IF NOT EXISTS `GoodsType` (`gID` int AUTO_INCREMENT,`type` varchar(10),`unit` varchar(10),`photo` blob,PRIMARY KEY (`gID`));";
  // let sql =
  //   "CREATE TABLE IF NOT EXISTS `SupplyRecord` (`srID` int AUTO_INCREMENT,`sup_ID` int,`unit_Prize` decimal(10,2),`amount` decimal(10,2),`type` int,`recieved_date` Date,PRIMARY KEY (`srID`), FOREIGN KEY (sup_ID) REFERENCES Supplier(sID), FOREIGN KEY (type) REFERENCES GoodsType(gID));";
// let sql =
//   "CREATE TABLE IF NOT EXISTS `Storage` (`stID` int NOT NULL AUTO_INCREMENT,`type` int,`stock_amount` decimal(10,2),`last_refilled_date` date,`unit_prize` decimal(10,2),PRIMARY KEY (`stID`),FOREIGN KEY (type) REFERENCES GoodsType(gID));";
  // let sql ="CREATE TABLE IF NOT EXISTS `Supplier` (`sID` int NOT NULL AUTO_INCREMENT,`name` varchar(20),`email` varchar(50),`Joined_date` date,`photo` blob,PRIMARY KEY (`sID`)) ENGINE=INNODB;"
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Table created");
  });
});

app.listen("3000", () => {
  console.log("Server running on port 3000...");
});
