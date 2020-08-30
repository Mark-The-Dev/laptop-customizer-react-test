import React, { Component } from 'react';
import FEATURES from './index'
import Parts from './Parts'



//Customize List Component
class Specs extends Component {



  render() {
    let features = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <Parts 
          feature={feature}
          FEATURES={FEATURES}
          theState={this.props.theState}
          updateFeatures={this.props.updateFeatures}
          />
        </fieldset>
      );
    });

    return(
      <>
      {features}
      </>
    )
  }
}
export default Specs