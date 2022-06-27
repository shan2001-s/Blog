import logo from './logo.svg';
import './App.css';
import { Grid, TextField, Container, Box, Button, Typography, Avatar, FormGroup,FormControlLabel,Checkbox ,Link} from '@mui/material';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SignUp from './components/sign_up';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PageMode from './components/PageMode';
import Header from './components/Header';
import Blog from './components/Blog';
import { BrowserRouter as Router } from 'react-router-dom';

import { Route,Switch } from 'react-router-dom';
import SignIn from './components/sign_in';

function App() {
  return (
   
    <Router>
        <div className='App'>
       {/* <Blog/> */}

          <NavBar/>
           
            
         
            <Switch>
              <Route path="/SignUp">
                  <SignUp/>
              </Route>
              <Route path='/SignIn'>
                <SignIn/>
              </Route>
              <Route path="/">
                  <Blog/>
              </Route>
            </Switch>

          
          {/* <PageMode/> */}
         
        </div>
     </Router>
  );
}

export default App;
