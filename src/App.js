import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Frame/Navbar";
import Navrbartop from "./components/Frame/Navbartop";
import NavItem from "./components/Frame/NavItem";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import UserProfile from "./components/Pages/UserProfile";
import EditProfile from "./components/Pages/EditProfile";
import Footer from "./components/Frame/Footer";
import AddProducts from "./components/Pages/AddProducts";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Shop from "./components/Pages/Shop";
import MyCart from "./components/Pages/MyCart";
import Wishlist from "./components/Pages/Wishlist";
import Vendor from "./components/Pages/Vendor";
import { Container } from "@material-ui/core";
import RetrieveUpdateDelete from "./components/Pages/RetrieveUpdateDelete";
import UpdateProduct from "./components/Pages/UpdateProduct";
import VendorRequest from "./components/vendor/vendorRequest";

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
          <Route path="/updateProduct" exact component={UpdateProduct} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/myCart" exact component={MyCart} />
          <Route path="/wishlist" exact component={Wishlist} />
          <Route path="/vendor" exact component={Vendor} />
          <Route path="/requestVendor" exact component={VendorRequest} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
