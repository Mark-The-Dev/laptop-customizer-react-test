import React, { Component } from 'react';
import slugify from 'slugify';
import FEATURES from './index'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});



class CustomizeList extends Component {

  features = Object.keys(FEATURES).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = FEATURES[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === this.props.theState[feature].name ? item.name : this.props.theState[feature].name }
            onChange={e => this.props.updateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    });
    
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });





  render() {
    //console.log(this.props.theState)
    return (
      <>
      {this.features}
      </>
    )

  }
}
export default CustomizeList