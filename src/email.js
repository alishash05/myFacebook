import React from 'react';


function Email(props) {
	
	const onChange=(e)=>{
	 
	 props.getValue(props.id, e.target.value,props.validation)
	 console.log(e.target.value,props.validation);
 }


return(
	<div style={{display:"block",height:"70px",width:"390px",margin:"px 0px 0px 0px",background:"white",padding:"0px"}}>

	<input id={props.id} style={{type: 'text',display: 'inline-block',height: '16px',width: '350px',padding: '10px',margin: '10px 0px 0px 10px',background:"pink"}}placeholder="Email address or password" type={props.type} validation={props.validation} onChange={(e)=>onChange(e)}/>
	
	</div>
);
}

export default Email;





