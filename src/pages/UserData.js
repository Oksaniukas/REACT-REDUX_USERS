import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function UserData() {
   const selectedUser = useSelector((state) => state.selectedUser);
   let navigate = useNavigate();

   function backToUserList(){
      navigate('/')
   }
   
   return(
      <div>
         <div>
            <div className="user">User name: {selectedUser.name} </div>
            <div className="user">User lastname: {selectedUser.lastname}</div>
         </div>
         <button onClick={backToUserList}>Back to User List</button>
      </div>
   )
};

export default UserData;