/*import react from'react';


function Page11() {
  return (
    <div
      style={{
        display: "inline-block",
        margin: "20px 0px 0px 0px",
        height: "500px",
        width: "1300px",
        background: "red",
      }}
    >
      <h1>Welcome To First Page</h1>
    </div>
  );
}
export default Page11*/
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home1.js";
import About from "./about.js";

function Page11(){
return(
	<div>
	<Routes>
	<Route path="/" element={<Home />} />
	<Route path="/about" element={<About />} />
	</Routes>

</div>
);
}
export default Page11 