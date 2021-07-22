import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Navbar';
import Navrbartop from './components/Navbartop';
import NavItem from './components/NavItem';
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';
import Footer from './components/Footer'
import AddProducts from './components/AddProducts'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import UpdateProduct from './components/UpdateProduct';
import RetrieveUpdateDelete from './components/RetrieveUpdateDelete';


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
          <Route path="/addproduct" exact component={AddProducts} />
          <Route path="/products" exact component={RetrieveUpdateDelete} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
