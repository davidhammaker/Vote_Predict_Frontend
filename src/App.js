import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import Logout from './components/logout';
import About from './components/about';
import QuestionsList from './components/questionsList';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Home } />
      <Route path="/signup" component={ SignUp } />
      <Route path="/login" component={ Login } />
      <Route path="/logout" component={ Logout } />
      <Route path="/about" component={ About } />
      <Route path="/questions" component={ QuestionsList } />
    </Router>
  );
}

export default App;
