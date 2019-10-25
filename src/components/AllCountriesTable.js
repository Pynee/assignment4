import React from "react";

const AllCountriesTable = props => {
  return (
    <React.Fragment>
      <h1>List of countries</h1> {props.children}
    </React.Fragment>
  );
};

export default AllCountriesTable;
