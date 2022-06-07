import React from "react";

export default function Home() {
  const name = "Supplier Management System";
  return (
    <div className="Container-fluid shadow ">
      <div className="row justify-content-center">
        <h1 className="text-center">WELCOME</h1>
        <h1 className="text-center">to</h1>
        <h1 className="text-center"> {name}</h1>
      </div>
      <br></br>
      <div className="row d-flex align-items-center justify-content-center">
        <img
          src="/assets/images/logo_new.png"
          className="img-fluid shadow "
          alt="logo.png"
          style={{ maxWidth: "30rem" }}
        />
      </div>
      <br></br>

      <div className="row d-flex align-items-center justify-content-center">
        {" "}
        <p class="text-center fs-5" style={{ maxWidth: "60rem" }}>
          The purpose of the supplier management system is to ease supplier
          management and to create a user friendly, convenient and easy to use
          web application for supplier managers who are responsible for managing
          supplies for their company.
        </p>
      </div>
    </div>
  );
}
