import React from 'react';

const InputComponent = (props) => {
  return (
    <div> 
      <input 
        value={props.text} 
        onChange={props.handleChange}>
      </input>
      <button 
        onClick={props.clicked}>
        submit
      </button>
    </div>
  )
}

export default InputComponent;

//weird... 
