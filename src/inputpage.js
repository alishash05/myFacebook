import react from 'react';
import Email from './email.js';
//import Password from './password.js';
import Button from './button.js';


function Inputpage(){
	
	const userValue =(id, val)=>{
		console.log(val,"user", id);
	}
	
	
	const validate=()=>{
		
		console.log("validate");
	}
	
	const logbutton=()=>{		
		console.log("test");
	}
	
return(
	<div style={{display:"block",height:"70px",width:"390px",margin:"auto",background:"pink",padding:"0px"}}>
	
	<Email getValue={userValue} type={"text"}id={"username"} validation={validate}/>
	<Email getValue={userValue} type={"password"} id={"password"}/>
	<Button click={logbutton} id={"btn"}/>
	
	
	</div>
	
	
);
}
export default Inputpage