import React from 'react';

import MyBrowser from 'pages/MyBrowser';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from 'theme/teme';

import data from './data/data.json';

function App() {
  const { dataRequests }: any = data;
  const expandedFolders: string[] = ['DIA SDK', 'bin', 'amd64'];

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <MyBrowser data={dataRequests} expandedFolders={expandedFolders} />
      </ThemeProvider>
    </>
  );
}

export default App;
