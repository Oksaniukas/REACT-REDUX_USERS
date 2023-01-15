import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserActionCreater, userDataActionCreater, editUserActionCreater } from "../store";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../asyncActions/users";


function UserList() {
   let navigate = useNavigate();

   const dispatch = useDispatch();
   const users = useSelector((state) => state.currentUsers)
   const usersList = users.map ((user, idx) => {
      return (
         <div className="user-block" key={idx} >
            <div className='user' onClick={() => {userPage(user)}} data-id={user.id} > {user.name} {user.lastname} </div>
            <div >
               <button className="btn" onClick={() => {deleteUser(user)}} > Delete </button>
               <button className="btn" onClick={() => {editUser(user)}}>Edit</button>
            </div>
         </div>
      )
   })

   function deleteUser(u) {
      dispatch(deleteUserActionCreater(u.id))
   }

  function userPage(user) {
      dispatch(userDataActionCreater(user))
      navigate('/userdata')
  }
  
  function editUser(user) {
      dispatch(editUserActionCreater(user))
      navigate('/new')
  }

   return (
      
      <div>
         <h3>LIST OF USERS:</h3>
         <div className="user">
            <button onClick={() => {dispatch(fetchUsers())}}>GET MORE USERS</button>
         </div>
         {
            users.length ?
               usersList :
               <div>There Are No Users</div>
         }
      </div>
   )
};

export default UserList;