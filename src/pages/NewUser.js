import React from "react";
import { addUserActionCreater } from "../store";
import { useDispatch, useSelector } from "react-redux";


function NewUser() {
   const dispatch = useDispatch();
   const users = useSelector((state) => state.currentUsers)

   function addUser(name, lastname) {
      const newId = users.length + 1;
      const newUsers = [...users, {name: name, lastname: lastname, id: newId}];
      dispatch(addUserActionCreater(newUsers))
      
   }

   
   return (
      <div>
         <div className="new-user">  NEW USER </div>
         <form onSubmit={addUser}>
            <input
               type='text'
               placeholder="User Name"
               className="input-item"
            />
            <input
               type='text'
               placeholder="User Lastname"
               className="input-item"
            />
            <button className="button" >
               Save
            </button>
         </form>
      </div>    
   )
};

export default NewUser;