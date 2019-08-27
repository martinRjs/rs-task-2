import React, { useState, useEffect } from 'react';
import Properties from '../../Data/properties';
import { formatPrice } from '../../Utils';
import PropertyImageSlider from './PropertyImageSlider';
import '../../Styles/components/_property-details.scss';

const PropertyDetails = ({ match }) => {

  const [property, setProperty] = useState({});

  useEffect(() => {
    const propertyIndex = Properties.properties.findIndex(item => {
      return item.id.toString() === match.params.propertyId
    });

    setProperty(Properties.properties[propertyIndex]);
  }, [match.params.propertyId])


  const { address1, city, state, zip } = property.address || {};

  return (
    <div className="details-container">
      <address>
        <p>{address1}</p>
        <span>{`${city}, ${state} ${zip}`}</span>
      </address>
      <div className="details">
        {property.resources ? <PropertyImageSlider {...property.resources} /> : ''}
        <div className="property-info">
          <div className="property-price">
            <small>Initial Investment</small>
            <p>{formatPrice(property.financial && property.financial.listPrice)}</p>
            <small>Open House Price:  $105,000</small>
          </div>
          <div className="more-details">
            <ul>
              <li>Monthly price: {formatPrice(property.financial && property.financial.monthlyRent)}</li>
              <li>Bedrooms: {property.physical && property.physical.bedRooms}</li>
              <li>Lot Size: {property.physical && property.physical.lotSize}</li>
              <li>Built year: {property.physical && property.physical.yearBuilt}</li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
}

export default PropertyDetails;