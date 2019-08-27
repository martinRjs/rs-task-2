import React from 'react';
import PropTypes from 'prop-types';
import PropertyCard from './PropertyCard';

const GridContainer = ({ properties, name }) => {
  return (
    <>
      {properties && properties.map(property => <PropertyCard {...property} key={property.id} />)}
    </>
  )
}

GridContainer.propTypes = {
  properties: PropTypes.array.isRequired
}

export default GridContainer;