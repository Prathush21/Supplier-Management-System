import { Button, Table } from "react-bootstrap";
import "../styles/table.css";
import { MDBCol, MDBInput } from "mdbreact";
import {useState} from "react"

export default function Suppliers() {

  const [check, setChecked] = useState(false);
  const [selectAll,setSelectAll] = useState(false);

  const suppliers = [
    {
      'id': 100, 
      'name': 'Kamal', 
      'email': 'kamal@gmail.com', 
      'contactno':'0759862565',
      'joineddate':'2015-10-18'

    },
    {
      'id': 100, 
      'name': 'Kamal', 
      'email': 'kamal@gmail.com', 
      'contactno':'0759862565',
      'joineddate':'2015-10-18'

    },
    {
      'id': 100, 
      'name': 'Kamal', 
      'email': 'kamal@gmail.com', 
      'contactno':'0759862565',
      'joineddate':'2015-10-18'

    },
    {
      'id': 100, 
      'name': 'Kamal', 
      'email': 'kamal@gmail.com', 
      'contactno':'0759862565',
      'joineddate':'2015-10-18'

    },
];
  
  return (
    <div className="Container-fluid">
      <h2>Supplier</h2>
      <br></br>
      <Button color="primary"> Add New Supplier </Button>{" "}
      <Button color="primary" style={{ marginLeft: ".5rem" }}>
        {" "}
        Delete Supplier{" "}
      </Button>
      <br></br>
      <br></br>
      <div className="search-box">
      <MDBCol md="6" style={{ display: "inline-grid" }}>
        <MDBInput
          hint="Search"
          type="text"
          id="search"
        />
      </MDBCol>{' '}
        <Button
          color="secondary"
          style={{ marginLeft: ".5rem", marginBottom: ".4rem" }}
        >
          {" "}
          Search{" "}
        </Button>
      </div>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>
              {" "}
              <input type="checkbox" onChange={()=>setSelectAll(!selectAll)} />
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th> Contact Number</th>
            <th> Joined Date</th>
          </tr>
        </thead>
        <tbody>

        
        {suppliers.map((supplier, index) => (
              <tr data-index={index}>
                            <td><input type="checkbox"  onChange= {!check}   /></td>

                <td>{supplier.id}</td>
                <td>{supplier.name}</td>
                <td>{supplier.email}</td>
                <td>{supplier.contactno}</td>
                <td>{supplier.joineddate}</td>

              </tr>
            ))}


        </tbody>
      </Table>
    </div>
  );
}

