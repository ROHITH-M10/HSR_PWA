import React, { useState } from "react";
import "./App.css";


import Home from "./components/Home";
import Login from "./components/Login";




function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [loginReload, setLoginReload] = useState(false);

  const adminUrl = "https://research.amritahospitals.org/app";


  function handleLogin() {
    setIsLogin(true);
  }


  function handleHomeClick() {
    window.scrollTo(0, 0);
  }


  return (
    <div>
      {/* Navbar with option to select server */}
      

      {!isLogin ? (
        // Home Page with Login and Guest Options
        <Home 
          handleLogin={handleLogin} 
          handleHomeClick={handleHomeClick}
        />
      ) :(
        // Show login page inside an iframe
        <Login adminUrl={adminUrl} 
        onHomeClick={handleHomeClick}
        loginReload={loginReload}
        />
      ) 
      }

    </div>
  );
}

export default App;