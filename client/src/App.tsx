import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Footer,NavBar, WhoWeAre } from './pages';
import { Footer } from './pages';
import { NavBar } from './pages';
import { Home } from './pages';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Home/>
      <WhoWeAre/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
