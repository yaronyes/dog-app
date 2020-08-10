import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderNav from './components/HeaderNav';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  const [hideNavbar, setHideNavbar] = useState(false);

  const hideHeaderNavbar = (hide = false) => {
    setHideNavbar(hide);
  }

  return (
    <div className="App">
      <HashRouter>
        <HeaderNav hideNavbar={hideNavbar}/>
        <Switch>
          <Route exact path="/">
            <HomePage hideHeaderNavbar={hideHeaderNavbar}/>
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
