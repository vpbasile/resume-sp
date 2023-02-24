import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { Plain } from './pages/APlain';
import { Blue } from './pages/ABlue';
import Componentized from './pages/ComponentizedResume';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Componentized} />
      <Route path="/comp" exact component={Componentized} />
      <Route path="/plain" exact component={Plain} />
      <Route path="/blue" exact component={Blue} />
    </Switch>
  </BrowserRouter>
);

export default App;