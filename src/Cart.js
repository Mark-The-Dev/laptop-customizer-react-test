import React, { Component } from 'react';
import FEATURES from '.';
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Cart extends Component {

  summary = Object.keys(this.props.theState).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = this.props.theState[feature];
    //console.log(this.props.theState[feature])
    //console.log(this.props.theState[idx])
    //console.log(selectedOption)
    
    
    // if (selectedOption === ){

    // }
    
    
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );





  });



  


  render(){
    return (
      <>
      {this.summary}
      </>
    )

  }

}

export default Cart