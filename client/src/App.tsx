import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Footer,NavBar, WhoWeAre, Home  } from './pages';


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
