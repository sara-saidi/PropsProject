import React from 'react'
import PropTypes from 'prop-types';
const Profile = (props) => {
  
  return (
    <div className='cont'>
    {props.children}
    
      <h1 style={{color:"red",textDecoration:'underline'}}>Name:{props.name}</h1>
      <h1>Lastname:{props.lastName}</h1>
      <h1>Lastname:{props.profession}</h1>
      <button onClick={() => alert('this user is '+props.name+' '+props.lastName)}>
      Click me!
      </button>
    </div>
  )
}
Profile.defaultProps={
  name:"sarra"
}
Profile.PropTypes={
  lastName:PropTypes.string
}
export default Profile
