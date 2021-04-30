
import './App.css';
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import AuthProvider from './context/AuthContext'
import Home from './components/pages/Home'
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn'

function App() {
  return (
    <AuthProvider>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={SignIn} />
            <Route path="/register" component={SignUp} />
          </Switch>
        </AuthProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
