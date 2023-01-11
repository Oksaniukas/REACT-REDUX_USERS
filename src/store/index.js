import { createStore } from "redux";

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
   ]
};

const DELETE_USER = "DELETE_USER";
const ADD_USER = "ADD_USER";

const usersReducer = (state = usersDefaultState, action) => {
   switch (action.type) {

      case DELETE_USER:
         return {...state, currentUsers: state.currentUsers.filter(user => {
            return user.id !== action.payload
         })}
      case ADD_USER:
         return {...state, currentUsers: action.payload}

      default: return state
   }
}

export const store = createStore(usersReducer);

export const addUserActionCreater = (payload) => {
   return {type: ADD_USER, payload}
}

export const deleteUserActionCreater = (payload) => {
   return { type: DELETE_USER, payload}
};


