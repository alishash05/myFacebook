import React from 'react';

function Button(props) {

  return (
		<label>
		<button id={props.id} style={{type: "text",display: "inline-block",height: "45px",width: "370px",margin: "20px 0px 0px 12px",background: "blue",
        color: "white"}} onClick={props.onClick}>
        <h2>Log in</h2>
      </button>
    </label>
  );
}

export default Button;