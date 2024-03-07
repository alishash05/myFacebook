import React, { useState } from 'react';
import Loginpage from './loginpage.js';
import Page1 from './page1.js';
import Navbar from './navbar';

function App(props) {
  const [page, setPage] = useState('login'); 
const [Pagenew, setPagenew] = useState('Page11');
 	
	
	
  const next = (id, val) => {
    if (id === 'pge') {
      setPage(val); 
      console.log('test');
    }
  };
  


  return (
    <div>
	{page === 'login' && <Loginpage next={next} />}
      {page === 'page1' && <Page1 />}
	  
	  
	</div>
	
  );
}

export default App;


