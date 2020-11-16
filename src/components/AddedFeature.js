import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/carActions';

export const AddedFeature = state => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => {state.removeFeature(state.feature)}}>
        X
      </button>
      {state.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);