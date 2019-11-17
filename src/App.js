import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Urls from './urls';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import Logout from './components/logout';
import About from './components/about';
import QuestionsList from './components/questionsList';

function App() {
  return (
    <Router>
      <Route exact path={ Urls.home() } component={ Home } />
      <Route path={ Urls.signup() } component={ SignUp } />
      <Route path={ Urls.login() } component={ Login } />
      <Route path={ Urls.logout() } component={ Logout } />
      <Route path={ Urls.about() } component={ About } />
      <Route path={ Urls.questions() } component={ QuestionsList } />
    </Router>
  );
}

export default App;
