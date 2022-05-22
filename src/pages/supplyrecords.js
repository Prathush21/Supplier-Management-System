import {
    Button,
    Table
  } from 'reactstrap';
  import '../styles/supplyrecords.css'

  export default function supplyRecords() {
   
      return (
        <div className='Container' >
          <h2>Supply Records </h2><br></br>
          <Button color="primary" > Add New Record</Button> {' '} {' '}
          <Button color="primary" style={{ marginLeft: '.5rem' }}> Delete Record </Button>

          <br></br> <br></br> <br></br>
          <Table striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Supplier ID</th>

            <th>Unit Price</th>
            <th> Amount</th>
            <th> Type</th>
            <th> Availability</th>
            <th> Received Date</th>
          </tr>
        </thead>
        <tbody>
      

            
            
          <tr>
            <td ><a href ="103"> 103 </a></td>
            <td>Loki</td>
            <td>65</td>
            <td>65</td>
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
            <td>72</td>
            <td>72</td>
       
          </tr>
          <tr>
            <td>104</td>
            <td>Kanag</td>
            <td>72</td>
            <td>72</td>
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
            <td>72</td>
            <td>72</td>
       
          </tr>
         
          
        </tbody>
      </Table>
      </div>
    );
  }
  