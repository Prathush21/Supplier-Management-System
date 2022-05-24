import { Button, Table } from "react-bootstrap";
import "../styles/table.css";
import { MDBCol, MDBInput } from "mdbreact";

export default function SupplyManagers() {

  const supplymanagers = [
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
      <h2>Supply Managers </h2>
      <br></br>
      <Button color="primary"> Add New Supply Manager </Button>{" "}
      <Button color="primary" style={{ marginLeft: ".5rem" }}>
        {" "}
        Delete Record{" "}
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
      <Button color="secondary" style={{ marginLeft: ".5rem" ,marginBottom: ".4rem" }}> Search </Button>
      </div>
      <Table responsive striped bordered hover className="Mytable">
        <thead>
          <tr>
          <th><input type="checkbox"    /></th>
            <th>ID</th>
            <th>Name</th>

            <th>Email</th>
            <th> Contact Number</th>

            <th> Joined Date</th>
          </tr>
        </thead>
        <tbody>
        {supplymanagers.map((suppman, index) => (
              <tr data-index={index}>
                            <td><input type="checkbox"    /></td>

                <td>{suppman.id}</td>
                <td>{suppman.name}</td>
                <td>{suppman.email}</td>
                <td>{suppman.contactno}</td>
                <td>{suppman.joineddate}</td>

          

              </tr>
            ))}

        </tbody>
      </Table>
    </div>
  );
}
