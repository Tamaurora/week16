import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import SkiingTips from './SkiingTips';
import SkiingLocations from './SkiingLocations';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/skiing-tips" component={SkiingTips} />
        <Route path="/skiing-locations" component={SkiingLocations} />
      </Switch>
    </Router>
  );
}

export default App;
