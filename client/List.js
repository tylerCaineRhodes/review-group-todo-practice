import React from 'react';

function List(props) {
  return (
    <div>
      <h3>
        List
      </h3>
        {props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </div>
  )
}

export default List;

//don't forget about key

// import React from "react";

// const Task = props => (
//   <div key={`task_${props.id}`}>
//     <span>{props.task}</span>
//     <button value={props.id} onClick={props.deleteTask}>
//       Complete
//     </button>
//   </div>
// );

// export default Task;
