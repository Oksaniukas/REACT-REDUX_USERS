import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';  
/*всегдa запускать с STORE*/

import thunk from "redux-thunk";

const usersDefaultState = {
   currentUsers: [
      {
         id: 1,
         name: "Alex",
         lastname : "Petrov"
      },
      {
         id: 2,
         name: "Petia",
         lastname : "Ivanov"
      },
      {
         id: 3,
         name: "Lena",
         lastname : "Zajkina"
      } 
   ],
   selectedUser: {}
};

const DELETE_USER = "DELETE_USER";
const ADD_USER = "ADD_USER";
const EDIT_USER = "EDIT_USER";
const UPDATE_USER = "UPDATE_USER";
const ADD_MORE_USERS = "ADD_MORE_USERS";
const USER_DATA = "USER_DATA";

const usersReducer = (state = usersDefaultState, action) => {
   switch (action.type) {
      case EDIT_USER:
         return {...state, selectedUser: action.payload }

      case USER_DATA:
         return {...state, selectedUser: action.payload}

      case ADD_MORE_USERS:
         return {...state, currentUsers: action.payload }

      case UPDATE_USER:
         return {...state, currentUsers: state.currentUsers.map(user => {
            if (user.id === action.payload.id) {
               const updatedUser = {
                  id: user.id,
                  name: action.payload.name,
                  lastname: action.payload.lastname   
               }
               return updatedUser
            }
            return user
         })}

      case DELETE_USER:
         return {...state, currentUsers: state.currentUsers.filter(user => {
            return user.id !== action.payload
         })}

      case ADD_USER:
         return {...state, currentUsers: [...state.currentUsers, action.payload]}

      default: return state
   }
}

export const store = createStore(usersReducer, composeWithDevTools(applyMiddleware(thunk)));

export const addUserActionCreater = (payload) => {
   return {type: ADD_USER, payload}
}

export const deleteUserActionCreater = (payload) => {
   return { type: DELETE_USER, payload}
};

export const addMoreUserActionCreater = (payload) => {
   return { type: ADD_MORE_USERS, payload}
};

export const editUserActionCreater = (payload) => {
   return { type: EDIT_USER, payload}
}
export const userDataActionCreater = (payload) => {
   return {type: USER_DATA, payload}
}


