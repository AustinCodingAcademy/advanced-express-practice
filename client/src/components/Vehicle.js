import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Vehicle(props) {
  return (
    <CollapsableMapper
      data={props.vehicle}
      path="vehicle"
      field="year"
      field1="make"
      field2="model"
      />
  );
}
export default Vehicle;
