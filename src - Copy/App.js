import React from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from './utils/firebase';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Account from './screens/Account';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
function App() {
  const [user, loading, error] = useAuthState(auth);

  console.log(user)

  return (
    <div className="app">

      <Router>
        <Switch>
          {loading && <LoadingScreen />}
          <Route path="/user/login"><LoginScreen /></Route>
          <Route path="/user/register"><RegisterScreen /></Route>
          <Route path="/user/account" ><Account /></Route>
          <Route path="/contact" ><ContactUs /></Route>
          <Route path="/about" ><AboutUs /></Route>
          <Route path="/" exact><HomeScreen /></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;