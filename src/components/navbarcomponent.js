import React from "react";
import { Button, } from "reactstrap";

export default function NavigationBar() {
  return (
    <div className="m-1">
      <div className="row mt-5"  href='/home'>
        <Button outline color="light" className="align-items-start">
          <span className="fa fa-home fa-lg"></span>  HOME
        </Button>
      </div>
      <div className="row mt-3">
        <Button outline color="light"  href='/storage'>
          <span className="fa fa-archive fa-lg"></span>  STORAGE
        </Button>
      </div>
      <div className="row mt-3" >
        <Button outline color="light"  href='/supplymanagers'>
          <span className="fa fa-user-o fa-lg"></span>  SUPPLY MANAGERS
        </Button>
      </div>
      <div className="row mt-3">
        <Button outline color="light"  href='/suppliers'>
          <span className="fa fa-vcard fa-lg"></span>  SUPPLIERS
        </Button>
      </div>
      <div className="row mt-3">
        <Button outline color="light"  href='/supplyrecords'>
          <span className="fa fa-list-alt fa-lg"></span>  SUPPLY RECORDS
        </Button>
      </div>
      <div className="row mt-3">
        <Button outline color="light"  href='/goods'>
          <span className="fa fa-shopping-basket fa-lg"></span>  GOODS
        </Button>
      </div>
      <div className="row mt-3 mb-2">
        <Button outline color="light" href='/'>
          <span className="fa fa-cogs fa-lg"></span>  EDIT ACCOUNT DETAILS
        </Button>
      </div>
    </div>
  );
}
