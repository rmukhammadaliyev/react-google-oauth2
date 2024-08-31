import { Routes, Route } from "react-router-dom";
import GoogleLogin from "./components/GoogleLogin";
import CustomGoogleLogin from "./components/CustomGoogleLogin";

const MainRoutes = () => (
  <Routes>
    <Route path="/custom" element={<CustomGoogleLogin />} />
    <Route path="/" element={<GoogleLogin />} />
  </Routes>
);

export default MainRoutes;
