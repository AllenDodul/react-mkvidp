import React, {useState} from 'react';
import './style.css';

const Nav = () =>{
  const [modeStatus, setModeStatus] = useState("light");
  const [mode, setMode] = useState({
    position: "relative",
    top: "2px",
    right: "-2px"
  });

  const toggleMode = () =>{
    if(modeStatus === "light"){
      setModeStatus("dark");
      setMode({
        position: "relative",
        top: "2px",
        left: "20px"
      })
    }else{
      setModeStatus("light");
      setMode({
        position: "relative",
        top: "2px",
        right: "-2px"
      })
    }
  }

  return(
    <nav>
      <h1>My Web</h1>
        <div className="switch" onClick={toggleMode}>
          <div className="cirecle" style={mode}></div>
        </div>
    </nav>
  )
}
export default Nav;