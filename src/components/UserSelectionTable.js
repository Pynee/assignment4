import React from "react";

const userSelectionTable = props => {
  return (
    <React.Fragment>
      <h1>List of user selected countries</h1> {props.children}
    </React.Fragment>
  );
};

export default userSelectionTable;
