import './globals.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@/components/theme-provider'

import { Popup } from './Popup'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="reswaey-ui-theme">
      <Popup />
    </ThemeProvider>
  </React.StrictMode>,
)
