/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleLink } from '../styles/styled';
import { getUser, getStrain } from '../actions';


const UserCard = (props) => {
  const { user, getUser, list, getStrain, currentStrain } = props
 
useEffect(() =>{
  getUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []
)

useEffect(() =>{
  getStrain()
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []
)
console.log(props)
console.log(getStrain)


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
        <h2>Recommended Strain: </h2>
        <ul>
      <li> {currentStrain} </li>
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
       currentStrain: state.strainReducer.currentStrain,
       symptom: state.symptomReducer.symptom,
    isFetchingData: state.isFetchingData
  }
}

export default connect(mSTP, { getUser, getStrain })(UserCard);




