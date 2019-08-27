import React, { useState, useEffect } from 'react';
import Properties from '../Data/properties';
import GridContainer from './GridView/GridContainer';
import ListContainer from './ListView/ListContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons/faAlignJustify';
import { faTh } from '@fortawesome/free-solid-svg-icons/faTh';

const Main = () => {
  const [properties] = useState(Properties.properties);
  const [gridView, setGridView] = useState(true);

  // useEffect(() => {
  //   console.log('fetching data ..');
  //   fetch('https://dev1-sample.azurewebsites.net/properties.json').then(a => a.json()).then(b => console.log(b))
  // });

  const handleViewChange = () => {
    setGridView(!gridView);
  }

  return (
    <>
      <ul className="view-options">
        <li>
          <button className={gridView ? '' : 'active'} onClick={handleViewChange}><FontAwesomeIcon icon={faAlignJustify} /></button>
        </li>
        <li>
          <button className={gridView ? 'active' : ''} onClick={handleViewChange}><FontAwesomeIcon icon={faTh} /></button>
        </li>
      </ul>
      <div className="main-container">
        {gridView ? <GridContainer properties={properties} /> :
          <ListContainer properties={properties} />}
      </div>
    </>
  );
}


export default Main;