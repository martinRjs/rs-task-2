import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import PropertyDetails from './PropertyDetails/PropertyDetails';
import { BrowserRouter, Route } from 'react-router-dom';

import '../Styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Main} />
          <Route path="/details/:propertyId" component={PropertyDetails} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;