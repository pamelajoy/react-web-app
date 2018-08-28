import React, { Component } from 'react';
import GenderButton from './GenderButton.js';

class GenderSelector extends Component{
  renderGenderButtons() {
    const { selectGender, gender } = this.props;

    return gender.map(gender => {
      const { key, display } = gender;
      return (
        <GenderButton
          key={key}
          id={key}
          display={display}
          selectGender={selectGender} />

      );
    });
  }

  render() {
    return (
      <div className="module-cta">
        {this.renderGenderButtons()}
      </div>
    );
  }
}

export default GenderSelector;
