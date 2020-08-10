import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderNav from './components/HeaderNav'
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [hideNavbar, setHideNavbar] = useState(false);

  return (
    <div className="App">
      <HashRouter>
        <HeaderNav hideNavbar={hideNavbar}/>
        <Switch>
          <Route exact path="/">

          </Route>
          <Route exact path="/breeds">

          </Route>
          <Route exact path="/breeds/:breedName">

          </Route>
        </Switch>
      </HashRouter>
      
    </div>
  );
}

export default App;
