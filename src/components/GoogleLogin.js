import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginComponent = () => {
  const handleLogin = (response) => {
    console.log("Login successful:", response);
    // Store the user information in your application's state or localStorage
  };

  const handleFailure = (error) => {
    console.error("Login failed:", error);
  };

  const handleLogout = () => {
    console.log("Google Logout");
  };

  return (
    <div>
      <GoogleLogin
        auto_select
        onSuccess={handleLogin}
        onError={handleFailure}
        useOneTap
      />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default GoogleLoginComponent;
