import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { CssBaseline } from '@mui/material';

const ColorModeContext = React.createContext({ Home: () => {} });


  
  
    
 


 function Home() {
  
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      Home: () => {
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
      <CssBaseline />
     
        <div>Heeeeeeeeeeeeeeeeeelllllllllllllllllll</div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Home;
