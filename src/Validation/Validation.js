import React from 'react';

const validation = (props) => {
  return (
    <div>
    <p>{props.length}</p>
    <p>{props.children}</p>
  </div>
  )
}

export default validation;
