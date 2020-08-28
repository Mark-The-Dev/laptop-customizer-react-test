import React, { Component } from 'react';
import FEATURES from './index'
import Options from './Options'



//Customize List Component
class CustomizeList extends Component {



  render() {
    let features = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <Options 
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
export default CustomizeList