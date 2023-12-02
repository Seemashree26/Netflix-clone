import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileScreen from "../pages/public/profileScreen/ProfileScreen";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ProfileScreen />} />
        {/* <Route path={"/"} element={<Footer />} /> */}
        {/* <Route path={"/signin"} element={<ProfileScreen />} /> */}
        {/* <Route path={"/signup"} element={<SignUpForm />} /> */}
        {/* <Route path={"/NavigationBar"} element={<NavigationBar />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
