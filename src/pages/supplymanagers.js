import { Button, Table } from "react-bootstrap";
import "../styles/supplyrecords.css";
import { MDBCol, MDBInput } from "mdbreact";

export default function supplyManagers() {

    

  return (
    <div className="Container">
      <h2>Supply Managers </h2>
      <br></br>
      <Button color="primary"> Add New Supply Manager </Button>{" "}
      <Button color="primary" style={{ marginLeft: ".5rem" }}>
        {" "}
        Delete Record{" "}
      </Button>
      <br></br>
      <br></br>

      <MDBCol md="6">
        <MDBInput
          hint="Search"
          type="text"
        />
      </MDBCol>
      <br></br> <br></br> 
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>

            <th>Email</th>
            <th> Contact Number</th>

            <th> Joined Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="103"> 103 </a>
            </td>
            <td>Loki</td>
            <td>65</td>
            <td>65</td>
            <td>65</td>
          </tr>

          <tr>
            <td>104</td>
            <td>Kanag</td>
            <td>72</td>
            <td>72</td>
            <td>72</td>
          </tr>
          <tr>
            <td>104</td>
            <td>Kanag</td>
            <td>72</td>
            <td>72</td>
            <td>72</td>
          </tr>
          <tr>
            <td>104</td>
            <td>Kanag</td>
            <td>72</td>
            <td>72</td>
            <td>72</td>
          </tr>
          
          <tr>
            <td>104</td>
            <td>Kanag</td>
            <td>72</td>
            <td>72</td>
            <td>72</td>
          </tr>
          
          <tr>
            <td>104</td>
            <td>Kanag</td>
            <td>72</td>
            <td>72</td>
            <td>72</td>
          </tr>
          
          <tr>
            <td>104</td>
            <td>Kanag</td>
            <td>72</td>
            <td>72</td>
            <td>72</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
