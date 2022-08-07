import React from 'react'
import "./App.css";
import Main from './components/Main';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Main />
    </>

  )
}

export default App