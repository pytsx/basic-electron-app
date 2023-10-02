import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import theme from './Common/Style/theme'
import './Common/Style/style.css'
import { ExplorerProvider, TabProbider } from './Common'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ExplorerProvider>
        <TabProbider>
          <RouterProvider router={router} />
          <CssBaseline />
        </TabProbider>
      </ExplorerProvider>
    </ThemeProvider>
  </React.StrictMode>
)
