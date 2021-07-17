import './App.css';
import Navbar from './components/Navbar';
import Navrbartop from './components/Navbartop';
import NavItem from './components/NavItem';
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';


function App() {
  return (
    <>
      <Router>
        <Navrbartop />
        <Navbar />
        <NavItem />
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/userprofile" exact component={UserProfile} />
          <Route path="/editprofile" exact component={EditProfile} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
