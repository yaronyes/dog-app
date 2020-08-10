import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderNav from './components/HeaderNav'

function App() {
  const [hideNavbar, setHideNavbar] = useState(false);

  return (
    <div className="App">
      <HeaderNav hideNavbar={hideNavbar}/>
    </div>
  );
}

export default App;
