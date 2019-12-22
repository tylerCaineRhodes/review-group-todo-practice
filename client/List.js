import React from 'react';

function List(props) {
  return (
    <div>
      To-Do List
        {props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </div>
  )
}

export default List;

//don't forget about key
