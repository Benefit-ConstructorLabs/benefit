// CardSection.js
import React from 'react';
import { CardElement } from 'react-stripe-elements';
import '../../styles/components/card-section.scss'

class CardSection extends React.Component {
  render() {

    return (
      <label>
        Card details
        <ul className=".input" >
          <li>
            <div className="input">
              <CardElement style={{base: {fontSize: '20px'}}} />
            </div>
          </li>
        </ul>
      </label>
    );
  }
}

export default CardSection;
