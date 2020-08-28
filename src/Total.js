import React, { Component } from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Total extends Component {

   total = Object.keys(this.props.theState).reduce(
    (acc, curr) => acc + this.props.theState[curr].cost,
    0
  );

    render(){
      return (
        <>
        {USCurrencyFormat.format(this.total)}
        </>

      )



    }




}



export default Total