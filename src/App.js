import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';
import {Switch,Route} from 'react-router-dom';
import {Container} from '@material-ui/core';


function App() {
  return (
    <>
    <Container maxWidth="md">
      <div className="app">
        <Switch>
          <Route path="/register" exact component ={Register}/>
          <Route path="/login" exact component ={Login}/>
          <Route path="/userprofile" exact component ={UserProfile}/>
          <Route path="/editprofile" exact component ={EditProfile}/>
        </Switch>
      </div>
    </Container>
    </>
  );
}

export default App;
