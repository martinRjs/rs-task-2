import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import '../../Styles/components/_list-view.scss';

const ListContainer = ({ properties }) => (
  <table className="app-list">
    <thead>
      <tr>
        <th></th>
        <th>Address</th>
        <th>Price</th>
        <th>Current Rent</th>
        <th>Gross Yield</th>
        <th>Year Build</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {properties.map(property => <ListItem {...property} key={property.id} />)}
    </tbody>
  </table>
);

ListContainer.propTypes = {
  properties: PropTypes.array.isRequired
}

export default ListContainer;