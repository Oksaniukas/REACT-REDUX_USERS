import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserActionCreater } from "../store";
import { useNavigate } from "react-router-dom";


function UserList() {
   let navigate = useNavigate();

   const dispatch = useDispatch();
   const users = useSelector((state) => state.currentUsers)
   const usersList = users.map ((user, idx) => {
      return (
         <div className="user-block" key={idx} >
            <div className='user' onClick={userPage} data-id={user.id} > {user.name} {user.lastname} </div>
            <div >
               <button className="btn" onClick={() => {deleteUser(user)}} > Delete </button>
               <button className="btn" onClick={editUser}>Edit</button>
            </div>
         </div>
      )
   })

   function deleteUser(u) {
      dispatch(deleteUserActionCreater(u.id))
   }

  function userPage() {
   navigate('/userdata')
  }
  
  function editUser() {
   navigate('/new')
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