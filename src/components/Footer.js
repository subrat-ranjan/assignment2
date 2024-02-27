import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className=' detail'>
                <img className='foot' src="./asserts/call.png" alt="call" />
                <p> Toll Free : 1800 200 1234  </p>
            </div>
            <div className=' detail'>
                <img className='foot' src="./asserts/facebook.png" alt="facebook" />
                <p> www.facebook.com/cripumps</p>
            </div>
            <div className=' detail'>
                <img className='foot' src="./asserts/www.png" alt="www" />
                <p>www.crigroups.com</p>
            </div>

        </div>
    )
}

export default Footer