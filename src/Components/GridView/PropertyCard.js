import React from 'react';
import PropTypes from 'prop-types';
import PropertyInfo from './PropertyInfo';
import PropertyScore from './PropertyScore';
import CardImage from './CardImage';
import { formatPrice, getGrossYield, getAddress } from '../../Utils'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Styles/components/_property-card.scss';

const PropertyCard = ({ mainImageUrl, address, physical, financial, score, id }) => {
  const { monthlyRent, listPrice } = financial || {};
  const { neighborhoodScore } = score || {};

  return mainImageUrl ? (
    <div className="property-card">
      <CardImage mainImageUrl={mainImageUrl} physical={physical} id={id} listPrice={listPrice}/>
      <div className="property-stats">
        <PropertyInfo header="Current Rent" content={`${formatPrice(monthlyRent)}`} />
        <PropertyInfo header="Cap Rate" content={''} />
        <PropertyInfo header="Gross Yield" content={getGrossYield(monthlyRent, listPrice) + '%'} />
        <PropertyScore score={neighborhoodScore} />
      </div>
      <div className="property-address">
        <span className="property-addres-value">{getAddress(address)}</span>
        <span className="property-status">
          <FontAwesomeIcon icon={faHome} /> Open House!
        </span>
      </div>
    </div>
  ) : ""
}

PropertyCard.propTypes = {
  id: PropTypes.number.isRequired,
  address: PropTypes.object,
  financial: PropTypes.object,
  physical: PropTypes.object,
  mainImageUrl: PropTypes.string,
  score: PropTypes.object,
}

export default PropertyCard;