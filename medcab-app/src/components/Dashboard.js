/* eslint-disable no-unused-vars */
import React from 'react';
import { Splash, StyleLink, StyleBtns, StyleP } from '../styles/styled'


import UserCard from './UserCard';

const Dashboard = (props) => {
    return (
        <div>
            
            <h1> Dashboard</h1>
            

            < UserCard list={props.symptoms} />
            
        </div>
    )
}


export default Dashboard