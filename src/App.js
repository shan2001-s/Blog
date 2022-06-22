import logo from './logo.svg';
import './App.css';
import { Grid, TextField, Container, Box, Button, Typography, Avatar, FormGroup,FormControlLabel,Checkbox ,Link} from '@mui/material';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SignUp from './components/sign_up';
import Home from './components/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Route,Switch } from 'react-router-dom';

function App() {
  return (
   
    <Router>
        <div className='App'>
          <NavBar/>
            <Switch>
              <Route path="/SignUp">
                  <SignUp/>
              </Route>
              <Route path="/">
                  <Home/>
              </Route>
            </Switch>
        </div>
     </Router>
  );
}

export default App;
