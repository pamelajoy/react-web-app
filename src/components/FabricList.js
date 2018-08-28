import React, { Component } from 'react';
import ListItem from './ListItem.js';

class FabricList extends Component{

  renderFabricList() {
    const { fabrics } = this.props;

    return fabrics.map(fabric => {
      const { key, value } = fabric;
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
      <ul className="fabricList">
        {this.renderFabricList()}
      </ul>
    );
  }

}

export default FabricList;
