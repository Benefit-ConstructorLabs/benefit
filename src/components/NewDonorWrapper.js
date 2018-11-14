import React from 'react';
import {Elements} from 'react-stripe-elements';
import NewDonor from './NewDonor';

function NewDonorWrapper(props){
  return (
    <Elements>
    <NewDonor {...props}/>
  </Elements>
);
};

export default NewDonorWrapper;
