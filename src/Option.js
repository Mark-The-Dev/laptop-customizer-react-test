import React, { Component } from 'react';
import USCurrencyFormat from './currency'

//Cart Component
class Option extends Component {

  render(){
    let summary = Object.keys(this.props.theState).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.theState[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value" >{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );  
    });
     
    return (
      <>
      {summary}
      </>
    )
  }
}

export default Option