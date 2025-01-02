import React from 'react'
import './Dash.css'
import { Link } from 'react-router-dom'

const Dash = (onLogout) => {

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthen');
//     onLogout();
//   };
  return (
    <div>
      
      <div className="header">
        <ul>
            <li><Link to="/table">State</Link></li>
            <li>country</li>
            <li>stateTitle</li>

            {/* <li><button onClick={handleLogout}>Log Out</button></li> */}
        </ul>
    </div>
    
    </div>

  )
}

export default Dash
