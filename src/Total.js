import React, { Component } from 'react';
import USCurrencyFormat from './currency'


//Options Component
class Total extends Component {

 

    render(){
      
      let total = Object.keys(this.props.theState).reduce(
        (acc, curr) => acc + this.props.theState[curr].cost,
        0
      );      
      return (
        <>
        {USCurrencyFormat.format(total)}
        </>
      )
    }
}



export default Total