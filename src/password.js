import React from 'react';


function Password(props) {
	
	 const onChange= (e)=>{
	 
	 props.getValue(props.id, e.target.value)
	 console.log(e.target.value);
 }

return(
	<div style={{display:"block",height:"70px",width:"390px",margin:"auto",background:"white",padding:"0px"}}>

	<input id={props.id} style={{type: 'text',display: 'inline-block',height: '16px',width: '350px',padding: '10px',margin: '0px 0px 0px 10px',background:"pink"}}placeholder="Password" type={props.type} onChange={(e)=>onChange(e)}/>
	
	
	</div>
);
}

export default Password;





