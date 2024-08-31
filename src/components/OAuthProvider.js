import { useLocation, Navigate } from "react-router-dom";

const OAuthRedirect = () => {
  const location = useLocation();
  const code = new URLSearchParams(location.search).get("code");

  // Exchange the code for an access token and store the user information
  // ...

  // Redirect the user to the desired page after successful authentication
  return <Navigate to="/" />;
}

export default OAuthRedirect;