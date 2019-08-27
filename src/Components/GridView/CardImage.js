import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { formatPrice, getPropertyPhysicalInfo } from '../../Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardImage = ({id, mainImageUrl, physical, listPrice}) => (
  <div className="property-info">
    <span className="favorite"><FontAwesomeIcon icon={faHeart} /></span>
    <Link to={`/details/${id}`}>
      <img src={mainImageUrl} alt="" />
    </Link>
    <div className="overlay">
      <span className="property-price">{`${formatPrice(listPrice)}`}</span>
      <p> {getPropertyPhysicalInfo(physical || {})}</p>
    </div>
  </div>
);

CardImage.propTypes = {
  id: PropTypes.number.isRequired,
  physical: PropTypes.object,
  mainImageUrl: PropTypes.string,
  listPrice: PropTypes.number
}

export default CardImage;