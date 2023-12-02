import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpScreen from "../pages/signUpScreen/SignUpScreen";
import HomeScreen from "../pages/homescreen/HomeScreen";
import ProfileScreen from "../pages/public/profileScreen/ProfileScreen";
import LoginScreen from "../pages/loginscreen/LoginScreen";
import MyList from "../pages/my-list/MyList";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/home"} element={<HomeScreen />} />
        <Route path={"/"} element={<ProfileScreen />} />
        <Route path={"/signin"} element={<HomeScreen />} />
        <Route path={"/signup"} element={<SignUpScreen />} />
        <Route path={"/myList"} element={<MyList />} />
        <Route path={"/signout"} element={<ProfileScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
