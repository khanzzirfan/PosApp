import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Budget from 'routes/Budget';
import Reports from 'routes/Reports';
import POS from 'routes/POS';
import './style.scss';

{/*<Header />*/}
const App = () => (
  <main>
    

    <Switch>
      
      <Route path="/budget" component={Budget} />
      <Route path="/reports" component={Reports} />
      <Route path="/pos" component={POS} />
      <Redirect to="/budget" />
    </Switch>
  </main>
);

export default App;
