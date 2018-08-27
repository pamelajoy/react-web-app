import React, { Component } from 'react';
import fabrics from './fabrics.js';
import gender from './gender.js';
import garments from './garments.js';
import './App.css';

function Button(props) {
  if (!props.display){
    return null;
  }
  return (
    <button
      className="button--rounded"
      // onClick={this.handleClick}
    >
      {props.display}
    </button>
  );
}

function GenderButtons(props) {
  const gender = props.gender;
  const genderOptions = gender.map((gender) =>
    <Button
      key={gender.key}
      display={gender.display}
    />
  );
  return (
    <div className="module-cta">
      {genderOptions}
    </div>
  );
}

function ListItem(props) {
  return (
    <li>
      {props.value}
      {props.gender ? ', ' + props.gender : ''}
    </li>
  );
}

function GarmentList(props) {
  const garments = props.garments;
  const listItems = garments.map((garment) =>
    <ListItem
      key={garment.key}
      value={garment.value}
      gender={garment.gender}
    />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

function FabricList(props) {
  const fabrics = props.fabrics;
  const listItems = fabrics.map((fabric) =>
    <ListItem
      key={fabric.key}
      value={fabric.value}
    />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <GenderButtons gender={gender} />
        <GarmentList garments={garments} />
        <FabricList fabrics={fabrics} />
      </div>
    );
  }
}

export default App;
