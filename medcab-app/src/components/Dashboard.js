/* eslint-disable no-unused-vars */
import React from 'react';
import { Splash, StyleLink, StyleBtns, StyleP, FormHeading, ContainerDiv } from '../styles/styled'


import UserCard from './UserCard';

const Dashboard = (props) => {
    return (
        <ContainerDiv>
            
            <FormHeading> Dashboard</FormHeading>
            

            < UserCard list={props.symptoms} />
            
        </ContainerDiv>
    )
}


export default Dashboard