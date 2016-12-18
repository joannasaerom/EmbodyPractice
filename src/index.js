import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Company from './Company';
import Parylene from './Parylene';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
  <App />,
  // <Router history={browserHistory}>
  //   <Route component={App}>
  //     <Route path="/" component={Home} />
  //     <Route path="company" component={Company} />
  //     <Route path="parylene" component={Parylene} />
  //   </Route>
  // </Router>,
  document.getElementById('root')
);
