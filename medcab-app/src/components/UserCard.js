/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleLink } from '../styles/styled';
import { symptomSubmit, deleteStrain, getUser } from '../actions';

const UserCard = (props) => {
useEffect((props) =>{
  getUser()
}, []
)

const initialStrainState = {
  strains: [],
  isFetchingData: false,
}

console.log(props)
  // const handleFetch = e => {
  //   e.preventDefault();
  //   props.getUser();
  // };

  return (
    <div>
      <h2> Welcome {props.username}</h2>
      <div> 
        <p>Tell us your symptoms and we will offer a suggestion.</p>
        <StyleLink to='/tempform'>Start Here</StyleLink>
      </div>
      <div>
        suggested strains would be here
        <ul>
      <li> </li>
        </ul>
      </div>
      <div className='symptoms'>
        <p>(map over symptom resuslts)</p>
        <ul>symptoms will show here</ul>
      <button> Change Symptoms</button>
      <button> Delete Symptoms</button>
    </div>
     
    </div>
  )
};
// const mSTP = state => {
//   return {
//     user: state.userReducer.user,
//        strain: state.strainReducer.strain,
//        symptom: state.symptomReducer.symptom,
//     isFetchingData: state.isFetchingData
//   }
// }

export default connect(null, { getUser, symptomSubmit, deleteStrain})(UserCard);




