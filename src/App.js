import React,{useState} from "react";
import "./style.css";
import Nav from "./Nav.jsx";

export default function App() {
  const [modeStatus, setModeStatus] = useState({
    background: "white"
  })

  const themeStatus = (mode) =>{
    if(mode === "light"){
      setModeStatus({
        background: "white",
        color: "black"
      })
    }else{
        setModeStatus({
          background: "black",
          color: "white"
        })
    }
  }

  return (
    <div style={modeStatus}>
      <Nav themeStatus={themeStatus}/>
    </div>
  );
}
