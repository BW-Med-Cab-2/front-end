/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavbarLink, StyleP, FormHeading, StyleBtns } from '../styles/styled';
import { getUser, getStrain } from '../actions';


const UserCard = (props) => {
  const { user, getUser, getStrain, currentStrain } = props
 
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
      <FormHeading> Welcome {user}</FormHeading>
      <div> 
        <StyleP>Tell us your symptoms and we will offer a suggestion.</StyleP>
        <StyleBtns><NavbarLink to='/tempform'>Start Here</NavbarLink></StyleBtns>
      </div>
      <div>
        <FormHeading>Recommended Strain: </FormHeading>
        
      <StyleP> {currentStrain} </StyleP>
        
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




