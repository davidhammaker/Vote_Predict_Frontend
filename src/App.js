import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import Logout from './components/logout';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Home } />
      <Route path="/signup" component={ SignUp } />
      <Route path="/login" component={ Login } />
      <Route path="/logout" component={ Logout } />
    </Router>
  );
}

export default App;
