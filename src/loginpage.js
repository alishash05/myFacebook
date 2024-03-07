import react, { useState } from 'react';
import Header from './header.js';
import Subpage from './subpage.js';
import Inputpage from './inputpage.js';
import Email from './email.js';
import Button from './button.js';

function Loginpage(props) {
  const [user, setUser] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(false);

  const uservalue = (id, val) =>{
    if(id === 'username'){
      setUser(val);
      if (val.length < 12 || val.length > 14){
        setUser(true);
		}else{
        setUser(false);
		}
	}
    if(id === 'password'){
      setPassword(val);
		}
		console.log(val, 'user', id);
	}

  const validate =()=>{
  console.log("validation")
  }

  const logbutton =()=>{
    if (validate() === true){ 
		return;
	}
	if (user === true){
      alert("Username must be minimum 12 and maximum 14 characters");
      return;
    }
	if (username === false && user === false){
      console.log('login', user);
      console.log('pass', password);
      console.log('validation', username);
      props.next('pge', 'page1');
    } 
  }

return (
    <div style={{display: 'inline-block',height: '500px',width: '1350px', background: 'lightgrey'}}>
		<div style={{ display: 'block', height: '70px', width: '390px', margin: 'auto', background: 'pink', padding: '0px' }}>
			<Email getValue={uservalue} type={'text'} id={'username'} />
			<Email getValue={uservalue} type={'password'} id={'password'} />
			<Button onClick={logbutton} id={'btn'} text={'Go to Page 1'} />
		</div>
    </div>
  );
}

export default Loginpage