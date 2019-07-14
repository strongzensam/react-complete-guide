import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
  return (
    <div className = "CharComponent">
      <p onClick={props.delete}>{props.children}</p>
    </div>
  )
}

export default charComponent;
