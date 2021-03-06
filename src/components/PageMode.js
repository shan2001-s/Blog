import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { CssBaseline } from '@mui/material';
import Home from './Home';
import NavBar from './NavBar';
import SignUp from './sign_up';
import App from '../App';
import { Route,Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Mode } from '@mui/icons-material';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export  function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 1,
      }}
    >
      {theme.palette.mode} 
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export  function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        
        <MyApp />
        {/* <App/> */}
        {/* <Router>
        <Switch>
              <Route path="/SignUp">
                  <SignUp/>
              </Route>
              <Route path="/">
                  <Home/>
              </Route>
            </Switch>
        </Router> */}
        
            
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


