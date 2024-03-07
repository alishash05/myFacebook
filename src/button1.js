import React from 'react';
import { useState } from 'react';


function Button1(){
  const [password, setPassword] = useState('password');
  const [email, setEmail] = useState('email');
  const [button, setButton] = useState('Show');
   

	const PasswordCheck =()=>{
		if (password === 'password'){
										setPassword('text');
									}else{
											setPassword('password');
										}
							};

	const EmailCheck =()=>{
		if (email === 'email'){
								setEmail('text');
							   }else{
										setEmail('email');
									}
							};

	const msg =()=>{
	    let next;
		if (email === 'email' ||email ==="character"||email ==="Symbol"|| password === 'password'){
			alert('***Enter Username and Password***');
			if (email.length < 4|| email.length > 14){
			alert('***Email should be at least 12 characters long***');
			}
			//if (email.length > 14){
			alert('***Email should be at most 14 characters long***');
			//}
			return;
			}
			alert('***Log in successfully***');
		};

  return (
    <form>
		<label>
        <input style={{type: 'text',display: 'inline-block',height: '16px',width: '350px',padding: '10px',margin: '25px 0px 0px 10px'}}
          placeholder="Email address or phone number" type="text" onChange={setEmail}/>
		</label>

		<label>
        <input style={{display: 'inline-block',background: 'white',height: '16px',width: '350px',padding: '10px',margin: '15px 0px 0px 10px'}}
			placeholder="password" id="btn" type={password} onChange={setPassword}/>
		
		<div style={{display: 'inline-block',margin: '0px 0px 0px -90px',height: '20px',width: '80px',background: 'blue'}}
          onClick={PasswordCheck}>{button}</div>
		</label>
	
		
		<button style={{type: 'text',display: 'inline-block',height: '45px',width: '370px',margin: '20px 0px 0px 12px',background: 'blue',color: 'white'}}
        onClick={msg}><h2>Log in</h2>
		</button>
		
		
	</form>
  );
}

export default Button1;

//http://localhost:3000/page1.js?
////https://www.facebook.com/