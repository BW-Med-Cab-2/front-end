/* eslint-disable no-unused-vars */

import React from 'react';
import { Splash, StyleLink, StyleBtns, StyleP } from '../styles/styled'
import splash from '../Assets/cannabisSplash.jpg'

const Home = () => {
    return (
        <div>
            <Splash src={splash}/>
            <StyleP>Ready to find a better alternative to medicine? <StyleLink to='/register'>Register Now!</StyleLink></StyleP>
            <StyleP>Already a Member? <StyleLink to='/login'>Sign In!</StyleLink></StyleP>
        </div>
    )
}

export default Home