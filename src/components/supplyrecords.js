import {
    Button,
    Table
  } from 'reactstrap';
  import '../styles/table.css'

  export default function supplyRecords() {

    const supplyrecords = [
      {
        'id': 100, 
        'supplierID': '175', 
        'unitprice':75,
        'amount':10000,
        'type': '1',
        'availability':"yes",
        'receiveddate':'2015-10-18'
  
      },
      {
        'id': 100, 
        'supplierID': '175', 
        'unitprice':75,
        'amount':10000,
        'type': '1',
        'availability':"yes",
        'receiveddate':'2015-10-18'
  
      },
      {
        'id': 100, 
        'supplierID': '175', 
        'unitprice':75,
        'amount':10000,
        'type': '1',
        'availability':"yes",
        'receiveddate':'2015-10-18'
  
      },
      {
        'id': 100, 
        'supplierID': '175', 
        'unitprice':75,
        'amount':10000,
        'type': '1',
        'availability':"yes",
        'receiveddate':'2015-10-18'
  
      }
  ];
   
      return (
        <div className='Container-fluid' >
          <h2>Supply Records </h2><br></br>
          <Button color="primary" > Add New Record</Button> {' '} {' '}
          <Button color="primary" style={{ marginLeft: '.5rem' }}> Delete Record </Button>

          <br></br> <br></br> <br></br>
          <Table responsive striped bordered hover variant="dark" >
        <thead>
          <tr>
          <th><input type="checkbox"     /></th>
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
        {supplyrecords.map((record, index) => (
              <tr data-index={index}>
                            <td><input type="checkbox"    /></td>

                <td>{record.id}</td>
                <td>{record.supplierID}</td>
                <td>{record.unitprice}</td>
                <td>{record.amount}</td>
                <td>{record.type}</td>
                <td>{record.availability}</td>
                <td>{record.receiveddate}</td>

              </tr>
            ))}
          
        </tbody>
      </Table>
      </div>
    );
  }
  