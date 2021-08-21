import React from 'react';
import './assets/scss/style.scss'
import './App.css'
import { Home, Giphy, Page404 } from './pages'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/iron-mans" component={Giphy} />
        <Route path="/search" component={Giphy} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
