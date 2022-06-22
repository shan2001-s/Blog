

import { Grid, TextField, Container, Box, Button, Typography, Avatar, FormGroup,FormControlLabel,Checkbox ,Link} from '@mui/material';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import LockOpenIcon from '@mui/icons-material/LockOpen';

function SignUp() {
  return (
    <div className="SignUp">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <Container maxWidth="sm" sx={{  padding: '60px'}}>
        <Box component="span" sx={{
        
        
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Box component="span" sx={{
            marginButton: 8, display: 'flex',
            flexDirection: 'column', alignItems: 'center'
          }}>
            <Avatar sx={{ bgcolor: "secondary.main", width: 60, height: 60 }}>
              <LockOpenIcon color="white" sm={{ fontSize: 60 }} />
            </Avatar>

            <Typography variant="h4">Sign Up</Typography>
          </Box>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
          <Grid container sx={{ mt: 3 }} spacing={2}>
            <Grid item xs={12} sm={6}  >
              <TextField  sx={{ bgcolor: "#f3e5f5"}} size='medium' label="First Name" fullWidth required   />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField  sx={{ bgcolor: "#f3e5f5"}} id="demo-helper-text-misaligned-no-helper2" label="Second Name" fullWidth required   />
            </Grid>
            <Grid item xs={12}>
              <TextField  sx={{ bgcolor: "#f3e5f5"}} id="demo-helper-text-misaligned-no-helper3" label="Email Address" fullWidth required  autoComplete="email" />
            </Grid>
            <Grid item xs={12}>
            <TextField
                  required
                  fullWidth
                  name="password"
                  sx={{ bgcolor: "#f3e5f5", border:"success"}}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  color="secondary"
                  label ="Password"
                />
            </Grid>
         
            <Grid item xs={12} fullWidth >
              <FormGroup>
              <FormControlLabel 
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label={ <Typography  variant='h6'   justifyContent="flex-end">
                    I want to receive inspiration, marketing promotions and updates via email.
                    </Typography>} 
                  />
              </FormGroup>
                
                </Grid>

              <Grid item xs={12}>
                 <Button variant="contained" fullWidth sx={{p:2}}>Sign Up</Button>
              </Grid>
              <Grid item xs={12} container justifyContent="flex-end">
                 <Link href="#" variant="body1">
                  Already have an account? Sign in
                </Link>
              </Grid>
              <Grid item xs={12} sx={{mt:5}}>
                 <Typography variant="body1">
                 Copyright © Your Website 2022.
                </Typography>
              </Grid>

             
            </Grid>

          </Box>
          
        </Box>
       


      </Container>
     
    </div>
     
  );
}

export default SignUp;
