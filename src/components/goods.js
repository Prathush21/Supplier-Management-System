import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple ,MDBCol,MDBRow} from 'mdb-react-ui-kit';
import {
    Button
    
  } from "reactstrap"

export default function Goods() {

   

    const goods = [
        {
          typeid: 100,
          typename: "type 1",
          unittype: "kg",
          image:'/assets/images/login.jpg'
        },
        {
            typeid: 100,
            typename: "type 1",
            unittype: "kg",
            image:'/assets/images/login.jpg'
        },
        {
            typeid: 100,
            typename: "type 1",
            unittype: "kg",
            image:'/assets/images/login.jpg'
        },
        {
            typeid: 100,
            typename: "type 1",
            unittype: "kg",
            image:'/assets/images/login.jpg'
        },
      ];


    
  return (

      <div className="Container">
          <h2>Goods</h2>
          <br></br>

              <Button color="primary"> Add New Good Type </Button><br></br><br></br>

          <MDBRow>
             

{goods.map((good, index) => (


            <MDBCol sm='4'>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardImage src={good.image} alt='...' position='top' ></MDBCardImage>
                  <MDBCardTitle>{good.typeid}</MDBCardTitle>
                  <MDBCardText>
                  <b>{good.typename}</b>
                  </MDBCardText>
                  <MDBCardText>
                  {good.unittype}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
         

            

           
        
         
          ))}
            </MDBRow>
    
    </div>
  );
}