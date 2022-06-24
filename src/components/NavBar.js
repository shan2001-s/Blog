import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Home from './Home';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { CssBaseline } from '@mui/material';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];


function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
      
          <ListItem  disablePadding>
            <ListItemButton  sx={{ textAlign: 'center' }}  href="/">
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding >
            <ListItemButton sx={{ textAlign: 'center' }}  href="/SignUp">
              <ListItemText primary="SignUp"/>
            </ListItemButton>
          </ListItem>
     
      </List>
    
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  // for dark & Light mode
  // const [mode, setMode] = React.useState('light');
  // const colorMode = React.useMemo(
  //   () => ({
  //     Home: () => {
  //       setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  //     },
  //   }),
  //   [],
  // );

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode],
  // );
  const ColorModeContext = React.createContext({ Home: () => {} });
  return (

    // <ColorModeContext.Provider value={colorMode}>
    //   <ThemeProvider theme={theme}>
    //   <CssBaseline />
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          
            <Button variant="outlined" sx={{ color: '#fff' }}   href="/">Home</Button>
            <Button sx={{ color: '#fff' }} href="/SignUp">Sign Up</Button>
            <Button sx={{ color: '#fff' }} href="/SignIn">Sign In</Button>
          </Box>
          {/* For Dark & Light Mode */}
          <Box
      sx={{
        display: 'flex',
      
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 0.5,
       
      }}
    >
        {/* <Button  variant="outlined">
        {theme.palette.mode} 
      <IconButton sx={{ ml: 1 }} onClick={colorMode.Home} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
        </Button> */}
     
    </Box>
          
        </Toolbar>
       
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
    

    </Box>
    // </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;