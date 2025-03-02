import React from 'react';
import { ChakraProvider, Box, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Box minH="100vh" display="flex" flexDirection="column">
          <Navbar />
          <Box display="flex" flex="1">
            <Sidebar />
            <Box flex="1" p={4}>
              <GameGrid />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;