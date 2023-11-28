import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home';
import './css/root.css';
import PublicLayout from "./layouts/PublicLayout"
function App() {


  return (
  <PublicLayout>
    <Home/>

</PublicLayout>
  )
}

export default App
