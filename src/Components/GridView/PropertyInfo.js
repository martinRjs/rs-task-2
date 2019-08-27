import React from 'react';
import PropTypes from 'prop-types';

const PropertyInfo = ({ header, content }) => (
  <div>
    <h5>{header}</h5>
    <p>{content}</p>
  </div>
);

PropertyInfo.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default PropertyInfo;