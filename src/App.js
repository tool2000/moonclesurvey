import React, { useCallback } from 'react';

import 'survey-core/modern.min.css';
// import 'survey-core/survey.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import './App.css';
import { Typography } from '@mui/material';
import MainBody from './mainBody';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResultPage from './resultPage';

function App() {

  return (
    <React.Fragment>
    
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainBody />} />
            <Route path="/result/:total" element={<ResultPage />} />
          </Routes>
        </BrowserRouter>

    </React.Fragment>

  )
}

export default App;