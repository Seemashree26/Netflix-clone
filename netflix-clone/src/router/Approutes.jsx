import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpScreen from "../pages/auth/signUpScreen/signUpScreen";
import HomeScreen from "../pages/public/homescreen/homeScreen";
import ProfileScreen from "../pages/public/profileScreen/ProfileScreen";
import LoginScreen from "../pages/auth/loginscreen/loginScreen";
import SearchScreen from "../pages/portal/searchscreen/searchScreen";
import MyList from "../pages/portal/my-list/MyList";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ProfileScreen />} />
        <Route path={"/home"} element={<HomeScreen />} />
        <Route path={"/signout"} element={<ProfileScreen />} />
        <Route path={"/signin"} element={<LoginScreen />} />
        <Route path={"/signup"} element={<SignUpScreen />} />
        <Route path={"/myList"} element={<MyList />} />
        <Route path={"/search"} element={<SearchScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
