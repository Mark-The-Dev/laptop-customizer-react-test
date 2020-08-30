import React from 'react'
import Specs from './Specs'


class Mainform extends React.Component{



  render(){
    return (
      <form className="main__form">
            <h2>Customize your laptop</h2>
            <Specs 
              theState={this.props.theState}
              updateFeatures={this.props.updateFeatures}
            />
          </form>
    )
  }


}


export default Mainform