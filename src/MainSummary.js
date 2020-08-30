import React from 'react'
import Option from './Option'
import Total from './Total'


class MainSummary extends React.Component{

render (){

  return (
    <section className="main__summary">
    <h2>Your cart</h2>
    <Option 
      theState={this.props.theState}
      updateFeatures={this.props.updateFeature}
    />
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        <Total
          theState={this.props.theState}
        />
      </div>
    </div>
  </section>

  )

}


}



export default MainSummary