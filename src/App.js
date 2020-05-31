import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import {
  Switch,
  Route,
} from "react-router-dom";
import Search from './components/Search/Search';

// styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'> <LandingPage /></Route>
        <Route path='/search'> <Search /></Route>
      </Switch>
    </div>
  );
}

export default App;
