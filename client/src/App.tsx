import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Footer,NavBar, WhoWeAre, Home, ContactUs } from './pages';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Home/>
      <WhoWeAre/>
      <ContactUs/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
