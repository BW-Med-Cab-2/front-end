/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleLink } from '../styles/styled';
import { getUser } from '../actions';


const UserCard = (props) => {
  const { user, getUser, list } = props
 
useEffect(() =>{
  getUser()
}, []
)

console.log(props)


  // const handleFetch = e => {
  //   e.preventDefault();
  //   props.getUser();
  // };

  return (
    <div>
      <h2> Welcome {user}</h2>
      <div> 
        <p>Tell us your symptoms and we will offer a suggestion.</p>
        <StyleLink to='/tempform'>Start Here</StyleLink>
      </div>
      <div>
        Internal server error is showing up
        <ul>
      <li> </li>
        </ul>
      </div>
      <div className='symptoms'>
        <p>(map over symptom resuslts)</p>
        <ul>
          <li>{list}</li>
        </ul>
      <button> Change Symptoms</button>
      <button> Delete Symptoms</button>
    </div>
     
    </div>
  )
};
const mSTP = state => {
  return {
    user: state.userReducer.user,
       currentStrain: state.strainReducer.strain,
       symptom: state.symptomReducer.symptom,
    isFetchingData: state.isFetchingData
  }
}

export default connect(mSTP, { getUser })(UserCard);




