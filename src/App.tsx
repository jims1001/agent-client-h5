import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/index.scss'
import { io } from "socket.io-client";




function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const client = new io("http://localhost:10000/im/agent");
      client.on("connect", () => {
          console.log("Connected:", client.id);
      });

      client.on("message", (data : any) => {
          console.log("Received message:", data);
      });


      client.emit("message", "Hello from client!");


  },[])
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
