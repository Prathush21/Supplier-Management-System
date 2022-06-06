import React from "react";
import { Input } from "reactstrap";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="search-box align-items-center">
      <div className="row">
        <div className="col-9">
          <Input
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
