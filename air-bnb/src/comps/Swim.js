import React from 'react'
import NavBar from 'NavBar'
import CardSingle from './CardSingle'
import { BrowserRouter } from 'react-router-dom';


function swim() {
  return (
    <div>
        <NavBar />
        <div>
            <CardSingle />
        </div>
    </div>
}

export default swim