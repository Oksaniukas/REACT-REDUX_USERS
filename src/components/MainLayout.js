import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
   const isActive = ({isActive}) => isActive ? 'active-link navigation-list-item' : 'navigatio-list-item';
   return (
      <div className="wrapper">
         <header>
            <div className="navigation-list">
               <NavLink to="/" className={isActive}> User List</NavLink>
               <NavLink to="/new" className={isActive}>Create User</NavLink>
               <NavLink to="/login" >Logout</NavLink>
            </div>   
         </header>

         <div className="main-block">
            <Outlet />
         </div>

         <footer>
            <div>Footer</div>
         </footer>
      </div>
   );
};

export default MainLayout;