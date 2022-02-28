import React from 'react'
import '../pages/footer.css'
import {Link} from 'react-router-dom'


const Footer = () => {
    return (
        <>
        <footer>
            
            <ul className="social_icon">
                <li><Link to =""/><i className="fab fa-facebook"></i></li>
                <li><Link to =""/><i className="fab fa-viber"></i></li>
                <li><Link to =""/><i className="fab fa-whatsapp-square"></i></li>
                <li><Link to =""/><i className="fab fa-instagram"></i></li>
            </ul>
            <ul className='menu'>
                <li><Link to='/'/>Home</li>
                <li><Link to='/Card'/>Service</li>
                <li><Link to=''/>Contact</li>
                <li><Link to=''/>Gallery</li>
                
            </ul>
            <p>@2021 Study japan center</p>
            <p>Design by Dongolheart</p>
        </footer>
            
        </>
    )
}

export default Footer
