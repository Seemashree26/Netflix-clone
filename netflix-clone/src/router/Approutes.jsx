import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpScreen from "../pages/signUpScreen/SignUpScreen";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={"/"} element={<HomeScreen/>}/> */}
        <Route path={"/"} element={<SignUpScreen />} />
        {/* <Route path={"/my-list"} element={<MyList />} /> */}
        {/* <Route path={"/signup"} element={<SignUpForm/>}/> */}
        {/* <Route path={"/NavigationBar"} element={<NavigationBar/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
