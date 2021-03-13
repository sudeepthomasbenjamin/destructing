// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from './practice'

var [honda,tesla]=cars;

var {speedStats:{topSpeed:teslaTopSpeed}}=tesla
var {speedStats:{topSpeed:hondaTopSpeed}}=honda

var {coloursByPopularity:[teslaTopColour]}=tesla
var {coloursByPopularity:[hondaTopColour]}=honda

console.log(teslaTopColour)




ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
