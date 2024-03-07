import { useState } from "react";


function Form() {
const [inputs, setInputs] = useState({});

return (
	 <div style={{ display: "inline-block", background: "lightblue", height: "60px", width: "350px", margin: "20px 0px 0px 20px" }}>
	
		<label>Enter Email:
		<input type="text" id="email"/></label>
    
		<label>Enter password:
		<input type="text" id="password"/></label>
      
		<div style={{display:"flex",background:"lightblue",height:"40px",width:"50px",margin:"20px 0px 0px 170px"}}>
			<input type="submit" />
		</div>
	</div>
   
  )



}
export default Form