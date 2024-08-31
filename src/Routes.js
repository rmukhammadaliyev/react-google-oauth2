import { Routes, Route } from "react-router-dom";
import OAuthRedirect from "./components/OAuthProvider";
import GoogleLogin from "./components/GoogleLogin";
import CustomGoogleLogin from "./components/CustomGoogleLogin";

const MainRoutes = () => (
  <Routes>
    <Route path="/oauth/redirect" element={<OAuthRedirect />} />
    <Route path="/custom" element={<CustomGoogleLogin />} />
    <Route path="/" element={<GoogleLogin />} />
  </Routes>
);

export default MainRoutes;
