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

const usersReducer = (state = usersDefaultState, action) => {
   switch (action.type) {

      case DELETE_USER:
         return {...state, currentUsers: state.currentUsers.filter(user => {
            return user.id !== action.payload
         })}

      default: return state
   }
}

export const store = createStore(usersReducer);

export const deleteUserActionCreater = (payload) => {
   return { type: DELETE_USER, payload}
};


