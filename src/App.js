import React, { Component } from 'react';
import fabrics from './data/fabrics.js';
import gender from './data/gender.js';
import garments from './data/garments.js';
import GenderSelector from './components/GenderSelector.js';
import GarmentList from './components/GarmentList.js';
import FabricList from './components/FabricList.js';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <GenderSelector
          gender={gender}
          selectGender={this.selectGender}
        />
        <GarmentList
          garments={garments}
        />
        <FabricList
          fabrics={fabrics}
        />
      </div>
    );
  }
}

export default App;
