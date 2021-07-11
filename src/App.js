import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
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


        </Switch>
      </div>
    </Container>
    </>
  );
}

export default App;
