import React from 'react'
import {Button} from '../Button/Button';
import './Hero.css'

import {
    Link, useHistory
  } from "react-router-dom";


function Hero() {

    let history = useHistory();

    return (
        <div className="hero-container">
            <div className="intro">
                <h1 className="introText">Wij zijn VIVES Kortrijk</h1>
                <Button buttonLink='/login' buttonStyle='btn--outline' buttonSize='btn--large'>Login</Button>
            </div>
        </div>
    )
}

export default Hero
