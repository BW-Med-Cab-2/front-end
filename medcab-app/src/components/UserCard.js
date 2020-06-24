import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUser, deleteUser } from '../actions';

const UserCard = (props) => {
useEffect(() =>{
  props.getUser()
}, []
)
console.log(props.user)
  const handleFetch = e => {
    e.preventDefault();
    props.getUser();
  };

  return (
    <div>
      <div>
        {props.user.map(uCard => {
          return (
            <div key={uCard.id}>
              <h2> {uCard.name} </h2>
           <p> other info I haven't decided on yet</p>
            </div>
          )
        })}
        
      </div>
      <button> Update User Profile</button>
      <button> Delete User Profile</button>
    </div>
  )
};
// const mSTP = state => {
//   return {
//     user: state.user,
//     isFetchingData: state.isFetchingData
//   }
// }

// export default connect(mSTP, {updateUser, deleteUser})(UserCard);

export default UserCard;


