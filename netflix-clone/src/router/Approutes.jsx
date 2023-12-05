import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpScreen from "../pages/signUpScreen/signUpScreen";
import HomeScreen from "../pages/homescreen/homeScreen";
import ProfileScreen from "../pages/public/profileScreen/ProfileScreen";
import LoginScreen from "../pages/loginscreen/loginScreen";
import SearchScreen from "../pages/searchscreen/searchScreen";
import MyList from "../pages/my-list/MyList";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
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
