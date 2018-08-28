import React, { Component } from 'react';

class GenderButton extends Component{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {selectedGenderId: null};
  }

  selectGender(gender) {
    this.setState({
      selectedGenderId: gender
    });
    console.log(gender);
  }

  handleClick() {
    const { id } = this.props;
    this.selectGender(id);
  }

  render() {
    const { display } = this.props;
    if (!display){
      return null;
    }
    return (
      <button
        className="button--rounded"
        onClick={this.handleClick}
      >
        {display}
      </button>
    );
  }
}

export default GenderButton;
