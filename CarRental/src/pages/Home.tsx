import React from 'react'
import backgrnd from "../assets/wallpaper.jpg"
import SearchForm from './components/form'
function Home() {

  return (
    <div>
      <h1 style={{color:'black',display:"flex",fontFamily: "sans-serif"}}> Compare and find rental car deals to find the right one.</h1>
      <SearchForm/>
    </div>
  )
}

export default Home
