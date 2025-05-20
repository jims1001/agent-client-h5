import {useEffect, useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'

import './App.css'
import './styles/index.scss'
import { useTrigger} from "@/api/useRequest";
import {useSocket} from "@/service/useSocket";

function App() {
    const [count, setCount] = useState(0);
    const {trigger} = useTrigger<{sessionId : string}>("http://localhost:8082/auth")
    const {trigger : socketTrigger} = useSocket()
    const isInitRef = useRef(false);
  useEffect(()=>{
      if (window.isInitSocket) {
          return
      }

      window.isInitSocket = true;

      isInitRef.current = true;
      console.log('app launched successfully.')
      trigger().then(res=>{
          console.log('res', res)
          socketTrigger(res.sessionId)
      })
  },[socketTrigger, trigger])
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
