import React from "react";

export default function Home() {
  const name = "Supplier Management System";
  return (
    <div className="Container-fluid shadow-2-strong">
      <div className="row justify-content-center">
        <h1 className="text-center">WELCOME</h1>
        <h1 className="text-center">to</h1>
        <h1 className="text-center"> {name}</h1>
      </div>
      <br></br>
      <div className="row d-flex align-items-center justify-content-center">
        <img
          src="/assets/images/logo_new.png"
          className="img-fluid shadow-2-strong"
          alt=""
          style={{ maxWidth: "30rem"}}
        />
        <p 
        style={{ maxWidth: "30rem"}}>The purpose of the supplier management system is to ease 
          supplier management and to create a user friendly, convenient 
          and easy to use web application for supplier managers who are 
          responsible for managing supplies for their company.
        </p>
      </div>
    </div>
  );
}
