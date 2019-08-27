import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons/faStar';


const rating = [
  <FontAwesomeIcon icon={faStar} />,
  <FontAwesomeIcon icon={faStar} />,
  <FontAwesomeIcon icon={faStar} />,
  <FontAwesomeIcon icon={faStar} />,
  <FontAwesomeIcon icon={faStarEmpty} />
];

const PropertyScore = ({ score }) => (
  <div>
    <h5>Neighborhood</h5>
    {rating.map((s, i) => i < score ? <FontAwesomeIcon icon={faStar} key={i} className="score"/> : <FontAwesomeIcon icon={faStarEmpty} key={i} className="score"/>)}
  </div>
);

PropertyScore.propTypes = {
  score: PropTypes.number.isRequired
}

export default PropertyScore;