import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStrain, deleteStrain, getUser } from '../actions';

const UserCard = (props) => {
useEffect((props) =>{
  getUser()
}, []
)

const initialStrainState = {
  strains: [],
  isFetchingData: false,
}

console.log(props.user)
  // const handleFetch = e => {
  //   e.preventDefault();
  //   props.getUser();
  // };

  return (
    <div className='userDashboard'>
      <h2> Welcome {props.user}</h2>
      <div className='questions'> 
        <p>Tell us your symptoms and we will offer a suggestion.</p>
        <button>Start Here</button>
      </div>
      <div className='suggested'>
        suggested strains would be here
        <ul>
      <li> strains will show here</li>
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
//     user: state.user,
//        strain: state.strain,
//     isFetchingData: state.isFetchingData
//   }
// }

export default connect(null, { getUser, getStrain, deleteStrain})(UserCard);




