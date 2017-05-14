import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Budget from 'routes/Budget';
import Reports from 'routes/Reports';
import POS from 'routes/POS';
import Transaction from 'routes/Transaction';
import './style.scss';

{/*<Header />
  
      <Route path="/budget" component={Budget} />
      <Route path="/reports" component={Reports} />
*/}
const App = () => (
  <main>
    
    <Switch>
      <Route path="/pos" component={POS}/>
      <Redirect to="/pos" />
    </Switch>
  </main>
);

export default App;
