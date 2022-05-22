import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
  import '../styles/addsupplymanager.css'

  export default function addsupplier() {
   
      return (
        <div className="Container">
          <h2>New Supplier </h2>
          <Form className="form">
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="exampleName"
                
              />
            </FormGroup>
            <FormGroup>
            <Label for="exampleEmail">Email Address</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
             
            />
            <Label for="ContactNo">Contact Number</Label>
            <Input
              type="text"
              name="contactno"
              id="contactnumbesr"
             
            />
            <Label for="address">Address</Label>
              <Input
                type="text"
                name="address"
                id="address"
                
              />
            <Label for="date">Joined Date</Label>
            <Input
              type="date"
              name="joineddate"
              id="joineddate"
             
            />

            </FormGroup>
          <Button color="primary"> Submit </Button>
        </Form>
      </div>
    );
  }
  