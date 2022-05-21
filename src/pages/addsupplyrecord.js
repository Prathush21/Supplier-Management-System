import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
  import '../components/addsupplymanager.css'

  export default function addsupplrecord() {
   
      return (
        <div className="Container">
          <h2>New Supply Record </h2>
          <Form className="form">
            <FormGroup>
              <Label for="supplID">Supplier ID</Label>
              <Input
                type="text"
                name="supplID"
                id="supplID"
                
              />
            </FormGroup>
            <FormGroup>
           
            <Label for="UnitPrice">Unit Price</Label>
            <Input
              type="number"
               step="0.01"
              name="unitprice"
              id="unitprice"
             
            />
            <Label for="Amount">Amount</Label>
            <Input
              type="number"
               step="0.01"
              name="amount"
              id="amount"
             
            />
            
            <Label for="date">Received Date</Label>
            <Input
              type="date"
              name="receivedddate"
              id="receiveddate"
             
            />

            </FormGroup>
          <Button color="primary"> Submit </Button>
        </Form>
      </div>
    );
  }
  