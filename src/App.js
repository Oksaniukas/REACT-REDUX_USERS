import React from "react";
import LoginLayout from "./components/LoginLayout";
import MainLayout from "./components/MainLayout";
import { Route, Routes } from "react-router-dom";
import NewUser from "./pages/NewUser";
import UserList from "./pages/UserList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginLayout />}></Route>
        
        <Route path="/" element={ <MainLayout />}>
          <Route index element={<UserList />}/>
          <Route path="/new" element={<NewUser />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
