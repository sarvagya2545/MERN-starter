import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import ProtectedRoute from './components/utils/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <ProtectedRoute path="/chat" component={Chat}/>
        <Route path="/" component={Home}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
