import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { NavBar } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
