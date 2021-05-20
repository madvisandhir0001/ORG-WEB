import React, { useEffect } from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth, companies, users } from './utils/firebase';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import Dashboard from './screens/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUserData, setCompanyData, selectCompanyData } from './features/appSlice';
import CategoryScreen from './screens/CategoryScreen';
import Header from './components/Header';

function App() {
  const [user, loading, error] = useAuthState(auth);
  const userData = useSelector(selectUserData);
  const companyData = useSelector(selectCompanyData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      users.doc(user.email || userData.email).onSnapshot(snapshot => dispatch(login(snapshot.data())));
      companies.doc(user.email || userData.email).onSnapshot(snapshot => dispatch(setCompanyData(snapshot.data())));
    }
  }, [user]);

  console.log(userData, companyData)

  return (
    <div className="app">
      <Router>

        <Header />
        <Switch>
          {loading && <LoadingScreen />}
          <Route path="/user/login"><LoginScreen /></Route>
          <Route path="/user/register"><RegisterScreen /></Route>
          <Route path="/user/dashboard" ><Dashboard /></Route>
          <Route path="/categories" ><CategoryScreen /></Route>
          <Route path="/contact" ><ContactUs /></Route>
          <Route path="/about" ><AboutUs /></Route>
          <Route path="/" exact><HomeScreen /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;