import React from 'react'
import Button from './Button'
import Button2 from './Button2'
import Footer from '../comps/Footer';


function Main() {
  return (
    <div className='Main Main-text' >
        <h1>Weng Haishi</h1>
        <h2  className='Main-job-title '>Frontend Developer</h2>
        <div className='Two-button' >
            <Button />
            <Button2 />
        </div>
        <h1 className='Main-about' >About</h1>
        <p className='Main-p' >
          I am a frontend/blockchain developer with experience in ReactJS, NextJS, Python and Solidity. Some of my sample projects are:
          <ul className='Main-list' >
            <li>NFT minting dAPP on ETH</li>
            <li>Lottery dAPP on Polygon  </li>
            <li>ERC20 token creation</li>
          </ul>
          <Footer />
        </p>
    </div>
  )
}
export default Main 