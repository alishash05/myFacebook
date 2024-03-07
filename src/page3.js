import react from 'react';

/*function Page3(){

return(
	<div style={{ display:"inline-block",margin:"20px 0px 0px 0px",height:"500px",width:"1300px",background:"lightgrey"}}>
	<h1>Welcome To Third Page 3</h1>
	</div>
   );
}
export default Page3
*/

import React, { useState } from 'react';

function Page3() {
  return (
    <div
      style={{
        display: "inline-block",
        margin: "20px 0px 0px 0px",
        height: "500px",
        width: "1300px",
        background: "yellow",
      }}
    >
      <h1>Welcome To Third Page</h1>
    </div>
  );
}
export default Page3
//This updated code will change the current page when you click on the navbar items and display the corresponding page.