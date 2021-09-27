import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const cssstyle ={
 }

 
let curDate = new Date();
let hour  = curDate.getHours();

let change = "";
if(hour >= 1 && hour < 12){
  change = "Good Morning";
  cssstyle.color = "green";
}else if(hour >=12 && hour<19){
  change = "Good Afternoon";
  cssstyle.color = "orange";
} else{
  change = "Good Night";
  cssstyle.color = "black"
}

ReactDOM.render(
  <>
  <div >
  <h1 >Hello Sir,<span style={cssstyle}>{change}</span></h1>
  </div>
  
  </>,document.getElementById("root")
  
);