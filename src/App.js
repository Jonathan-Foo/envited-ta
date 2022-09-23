import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Event from "./pages/Event";
import Create from "./pages/Create";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/event' element={<Event />}/>
        </Routes>
      </LocalizationProvider>
    </>
  );
}

export default App;
