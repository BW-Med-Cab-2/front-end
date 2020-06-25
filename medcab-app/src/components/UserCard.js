import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUser, deleteUser, getStrain, deleteStrain } from '../actions';

const UserCard = (props) => {
useEffect((props) =>{
  props.getUser()
}, []
)

useEffect((props) => {
  props.getStrain()
})

console.log(props.user)
  // const handleFetch = e => {
  //   e.preventDefault();
  //   props.getUser();
  // };

  return (
    <div>
      <div>
        {props.user.map(user => {
          return (
            <div key={user.id}>
              <h2> Welcome {user.name} </h2>
          
            <button> Questions </button>
            <p> reccommendations would go here (map over form results ?)</p>
            {props.results.map(strain => {
              return (
                <div key={strain.id}>
               <h3>{strain.strain}</h3> 
               <p>{strain.flavors}</p> 
              <p>{strain.effects}</p> 
              <p>{strain.medical}</p> 
              <p>{strain.type}</p> 
              <p>{strain.rating}</p> 
              </div>
              )
            })}
            </div>
          )
        })}
        
      </div>
      <button> Update User Profile</button>
      <button> Delete User Profile</button>
    </div>
  )
};
const mSTP = state => {
  return {
    user: state.user,
       strain: state.strain,
    isFetchingData: state.isFetchingData
  }
}

export default connect(mSTP, {updateUser, deleteUser, getStrain, deleteStrain})(UserCard);




