import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserActionCreater } from "../store";

function UserList() {
   const dispatch = useDispatch();
   const users = useSelector((state) => state.currentUsers)
   const usersList = users.map ((user, idx) => {
      return (
         <div className="user-block">
            <div className='user' data-id={user.id} key={idx}> {user.name} {user.lastname} </div>
            <div >
               <button className="btn" onClick={() => {deleteUser(user)}} > Delete </button>
               <button className="btn" >Edit</button>
            </div>
         </div>
      )
   })

   function deleteUser(u) {
      dispatch(deleteUserActionCreater(u.id))
   }

   return (
      
      <div>
         <h3>LIST OF USERS:</h3>
         {
            users.length ?
               usersList :
               <div>There Are No Users</div>
         }

      </div>
   )
};

export default UserList;