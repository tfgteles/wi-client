import * as React from 'react';
import { Box } from '@mui/material';
import MainTabs from './components/MainTabs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Play from './views/Play';

function App() {
  return (
    <Box sx={ {width: '100%' } }>
      <BrowserRouter>
        <MainTabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
