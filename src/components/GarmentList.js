import React, { Component } from 'react';
import ListItem from './ListItem.js';

class GarmentList extends Component{

  renderGarmentList() {
    const { garments } = this.props;

    return garments.map(garment => {
      const { key, value } = garment;
      return (
        <ListItem
          key={key}
          value={value}
        />

      );
    });
  }

  render() {
    return (
      <ul className="garmentList">
        {this.renderGarmentList()}
      </ul>
    );
  }

}

export default GarmentList;
