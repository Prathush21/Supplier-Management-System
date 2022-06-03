import React from "react";
import { MDBInput } from "mdbreact";
import { Button } from "reactstrap";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="search-box align-items-center">
      <div className="row">
        <div className="col-9">
          <MDBInput
            hint="Search"
            type="search"
            id="search"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            value={filter || ""}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
