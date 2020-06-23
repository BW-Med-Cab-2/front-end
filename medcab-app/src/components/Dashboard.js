/* eslint-disable no-unused-vars */
import React from 'react';
import { Splash, StyleLink, StyleBtns, StyleP } from '../styles/styled'
import splash from '../Assets/cannabisSplash.jpg'

const Dashboard = () => {
    return (
        <div>
            <Splash src={splash}/>
            <StyleP> User Dashboard goes here </StyleP>
            
        </div>
    )
}

export default Dashboard