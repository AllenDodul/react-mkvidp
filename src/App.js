import React,{useState} from "react";
import "./style.css";
import Nav from "./Nav.jsx";

const themeStatus = (mode) =>{
  if(mode === "light"){
    
  }
}

export default function App() {
  const [themeStatus] = useState({

  });
  return (
    <div style={theme}>
      <Nav themeStatus={themeStatus}/>
    </div>
  );
}
