import React from 'react'
import'../App'
import'./HeroSection.css'
import Contact from './pages/Contact'




const HeroSection = () => {
    return (
        <>
         <div className='hero-container'>
              <video src="/video/vid.mp4" autoPlay loop muted/>
             
            <center> <h1>Adventure Awaits</h1>
             <p>What are you waiting for?</p></center>
             
             </div> 
                  
        </>
    )
}

export default HeroSection
