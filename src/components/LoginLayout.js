import React from "react";
import { useNavigate } from "react-router-dom";

function LoginLayout() {
   let navigate = useNavigate();
   
   function loginCheck() {
      navigate('/') 
   }

   return (
      <div className="login-wrapper">
         <h2> PLEASE LOGIN</h2>
         <div>
            <button onClick={loginCheck}> LOGIN </button>
         </div>
      </div>
   );
};

export default LoginLayout;