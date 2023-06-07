import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Footer, NavBar, Home, WhoWeAre, CarouselComponent } from './pages';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Home/>
      <WhoWeAre/>
      <CarouselComponent/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
