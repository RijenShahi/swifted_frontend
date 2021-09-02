import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Navbar from "./components/Frame/Navbar";
import Navrbartop from "./components/Frame/Navbartop";
import NavItem from "./components/Frame/NavItem";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import UserProfile from "./components/Pages/UserProfile";
import EditProfile from "./components/Pages/EditProfile";
import Footer from "./components/Frame/Footer";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Shop from "./components/Pages/Shop";
import Cart from "./components/Pages/Cart";
import Wishlist from "./components/Pages/Wishlist";
import controlPanalProduct from "./components/Pages/ControlPanalProduct";
import UpdateProduct from "./components/Pages/UpdateProduct";
import RetrieveUpdateDelete from "./components/Pages/RetrieveUpdateDelete";
import VendorRequest from "./components/Vendor/vendorRequest";
import Checkout from "./components/Pages/Checkout";
import CardsForCart from "./components/Cards/CardsForCart";
import ResetPass from "./components/Pages/resetPass";

import Header from "./components/Frame/Header";

import ViewRequests from "./components/Pages/vendorRequest";


function App() {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/userprofile" exact component={UserProfile} />
          <Route path="/editprofile" exact component={EditProfile} />
          <Route path="/updateProduct" exact component={UpdateProduct} />
          <Route path="/products" exact component={RetrieveUpdateDelete} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/myCart" exact component={Cart} />
          <Route path="/wishlist" exact component={Wishlist} />
          <Route path="/controlPanel" exact component={controlPanalProduct} />
          <Route path="/vendorRequest" exact component={VendorRequest} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/product/:pid" exact component={CardsForCart}></Route>
          <Route path="/reset/:tokenId" component={ResetPass} exact/>
          <Route path="/vendorRequests" component={ViewRequests} exact/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
