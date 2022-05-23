const app = require("./app");
const db = require("./db/db");

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql DB connected...");
});

app.get("/", (req, res) => {
  let sql =
    "CREATE TABLE IF NOT EXISTS `Supplier` (`ID` int NOT NULL AUTO_INCREMENT,`name` varchar(20),`email` varchar(50),`Joined_date` date,`photo` blob,`address` int,PRIMARY KEY (`ID`),FOREIGN KEY (address) REFERENCES Address(ID)) ENGINE=INNODB;";
        db.query(sql,(err,result)=>{
            if(err) throw err;
            console.log(result);
            res.send("Table created")

        })

        
});

app.listen("3000", () => {
  console.log("Server running on port 3000...");
});
