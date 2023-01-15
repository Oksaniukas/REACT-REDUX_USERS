import { addMoreUserActionCreater } from "../store";

export const fetchUsers = () => {
   return function(dispach) {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispach(addMoreUserActionCreater(json)))
   }
}