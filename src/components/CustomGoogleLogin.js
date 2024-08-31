import { useState, useEffect } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";

const CustomGoogleLogin = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("User token:", tokenResponse);
      setUser(tokenResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
    /*flow: "auth-code",*/ // this param we should use to request for user data from backend
  });

  useEffect(() => {
    if (user) {
      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer ${user.access_token}",
            Accept: "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Profile:", data);
          setProfile(data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
    </div>
  );
};

export default CustomGoogleLogin;
