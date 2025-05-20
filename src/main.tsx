import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import App from './App.tsx'
import React from 'react'
import {Route, Routes} from "react-router-dom";
window.isInitSocket = false;
window.isReadySocket = false;
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" Component={App} />
          </Routes>

      </BrowserRouter>

  </StrictMode>,
)
