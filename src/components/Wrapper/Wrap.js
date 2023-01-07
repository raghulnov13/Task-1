import React from 'react'
import './Wrap.css'
import images from '../images/lap.jpg'
import images1 from '../images/cart.png'
import images2 from '../images/mouse.jpg'
import images3 from '../images/speaker.jpg'

function Wrapper() {
    return (
        <div className='layer'>
            <div className='layer-flex'>
                <div className='box'>
                    <img src={images} className="Box-img" alt="laptop" />
                    <h3>Wireless Keyboard</h3>
                    <span>$120</span>
                </div>
                <div className='box'>
                    <img src={images1} className="Box-img" alt="laptop" />
                    <h3>Wireless Keyboard</h3>
                    <span>$170</span>
                </div>
                <div className='box'>
                    <img src={images2} className="Box-img" alt="laptop" />
                    <h3>Wireless Keyboard</h3>
                    <span>$100</span>
                </div>
                <div className='box'>
                    <img src={images3} className="Box-img" alt="laptop" />
                    <h3>Wireless Keyboard</h3>
                    <span>$158</span>
                </div>
            </div>
        </div>
    )
}

export default Wrapper;

