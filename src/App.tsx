import * as React from 'react';
import { Box } from '@mui/material';
import MainTabs from './components/MainTabs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Play from './views/Play';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';

function App() {
  return (
    <Box sx={ {width: '100%' } }>
      <BrowserRouter>
        <MainTabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
