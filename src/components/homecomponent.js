import React from "react";

export default function Home() {
  const name = "Supply Management System";
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
          src="assets/images/logo.jpg"
          className="img-fluid shadow-2-strong"
          alt=""
          style={{ maxWidth: "30rem"}}
        />
      </div>
    </div>
  );
}
