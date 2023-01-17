import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserActionCreater } from "../store";


function NewUser() {
   let navigate = useNavigate();
   const dispatch = useDispatch();
   // const users = useSelector((state) => state.currentUsers);
   const chosenUser = useSelector((state) => state.selectedUser);
   const allUsersAmount = useSelector((state) => state.currentUsers).length;

   const [selectedUser, setSelectedUser] = useState(chosenUser);
   

   function changeUserName(e) {
      setSelectedUser(prev => {
         return {...prev, name: e.target.value}
      })
   };

   function changeUserLastname(e) {
      setSelectedUser(prev => {
         return {...prev, lastname: e.target.value}
      })
   };

   function setChangedUser() {
      dispatch({type: "UPDATE_USER", payload: selectedUser});
      dispatch({type: "EDIT_USER", payload: {}})
      navigate('/')
   }

   function addUser() {
      dispatch(addUserActionCreater({...selectedUser, id: allUsersAmount + 1}))
      navigate('/')
      
   }
  
   return (
      <div>
         <div className="new-user"> 
            {selectedUser.id ? "EDIT USER" : "NEW USER"}  
         </div>
         <form >
            <input
               type='text'
               placeholder="User Name"
               className="input-item"
               value={selectedUser.name}
               onChange={(e) => {changeUserName(e)}}
            />
            <input
               type='text'
               placeholder="User Lastname"
               className="input-item"
               value={selectedUser.lastname}
               onChange={(e) => {changeUserLastname(e)}}
            />
            {/* <button type="button" className="button" onClick={setChangedUser} >
            {selectedUser.id ? "SAVE EDIT" : "CEATE NEW "}  
            </button>
 */}
            
            {selectedUser.id ? 
            <button type="button" className="button" onClick={setChangedUser} > SAVE EDIT </button> 
            : <button type="button" className="button" onClick={addUser} > CREATE NEW </button>}  
         </form>
      </div>    
   )
};

export default NewUser;