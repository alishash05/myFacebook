import react,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from  './home.js';
import Page1 from'./page1.js';
import Page11 from './page11.js';
import Page2 from './page2.js';
import Page3 from './page3.js';
import Page4 from './page4.js';
import Page5 from './page5.js';


function Navbar(props) {

  const[NowPage, setNextPage] = useState(0);
	const newpage =(val)=>{
		if(val === 'Page11'){
		NowPage(val);
		console.log("page test");
		}else{
		setNextPage(val);
		console.log("newpage test")
		}
		}  
		
return(
	<div style={{display:"inline-block",height:"55px",margin:"0px 0px 0px 0px",width:"650px",background:"lightgrey"}}>
	<Router>
	<div style={{display: "inline-block",margin: "10px 0px 0px 20px",height: "35px",color: "white",background: "blue"}}><Link to="/page11">Page11</Link></div>
    <div style={{display: "inline-block",margin: "10px 0px 0px 20px",height: "35px",color: "white",background: "blue"}}><Link to="/page2">Page2</Link></div>
	<div style={{display: "inline-block",margin: "10px 0px 0px 20px",height: "35px",color: "white",background: "blue"}}><Link to="/page3">Page3</Link></div>
	<div style={{display: "inline-block",margin: "10px 0px 0px 20px",height: "35px",color: "white",background: "blue"}}><Link to="/page4">Page4</Link></div>
	<div style={{display: "inline-block",margin: "10px 0px 0px 20px",height: "35px",color: "white",background: "blue"}}><Link to="/page5">Page5</Link></div>
	
	<Routes>
		<Route exact path="/home" element={NowPage === 0 && <Home newpage={(val) => newpage(val)} />}/>
		<Route exact path="/page11" element={<Page11 newpage={(val) => newpage(val)} />}/>
		<Route exact path="/page2" element={<Page2 newpage={(val) => newpage(val)} />}/>
		<Route exact path="/page3" element={<Page3 newpage={(val) => newpage(val)} />}/>
		<Route exact path="/page4" element={<Page4 newpage={(val) => newpage(val)} />}/> 
        <Route exact path="/page5" element={<Page5 newpage={(val) => newpage(val)} />}/>  
	</Routes>
	</Router>
	</div>
);
}

export default Navbar
