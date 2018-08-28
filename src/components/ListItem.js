import React, { Component } from 'react';

class ListItem extends Component{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { value } = this.props;
    console.log(value);
  }

  render() {
    const { value } = this.props;

    return (
      <li className="Contact-link">
        <a
          href="/"
          onClick={this.handleClick}
        >
          {value}
        </a>
      </li>
    );
  }




}

export default ListItem;
