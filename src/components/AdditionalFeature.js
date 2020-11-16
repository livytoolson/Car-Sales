import React from 'react';
import { connect } from 'react-redux';
import { addPrice } from '../actions/carActions';

export const AdditionalFeature = state => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {state.addPrice(state.feature)}}>
        Add
      </button>
      {state.feature.name} (+{state.feature.price})
    </li>
  );
};

const mapPropsToState = (state) => {
  return {
    AdditionalFeature: state.AdditionalFeature
  };
};

export default connect(mapPropsToState, { addPrice })(AdditionalFeature);
