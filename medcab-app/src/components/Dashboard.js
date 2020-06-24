/* eslint-disable no-unused-vars */
import React from 'react';
import { Splash, StyleLink, StyleBtns, StyleP } from '../styles/styled'
import splash from '../Assets/cannabisSplash.jpg'
import { connect } from 'react-redux';
import { updateUser, deleteUser } from '../actions'
import UserCard from './UserCard';

const Dashboard = () => {
    return (
        <div>
            <Splash src={splash}/>
            <StyleP> User Dashboard goes here </StyleP>
            <p> make form to update and user info to display</p>
            
            < UserCard />
            
        </div>
    )
}

//make sure this is correct ... do I need mSTP
// const mSTP = state => {
//     return {
//         user: state.user,
//         isUpdated: state.isUpdated,
//         isDeleted: state.isDeleted
//     }
// }
export default connect(null,{updateUser, deleteUser}) (Dashboard)