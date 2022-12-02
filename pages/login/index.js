import React, { useState } from "react";
import { setCookie } from "cookies-next";
import styles from "../../styles/login.module.scss";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
  
function Login() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState(false);
  const [Loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      if (!userName?.length || !email?.length) {
        setValidation(true);
        setLoading(false);

        return;
      }
    setTimeout(async() => {
      const response = await fetch(
        "https://api.themoviedb.org/3/authentication/token/new?api_key=6e37d364da090a453e6c12697bcfcde7"
      );
      const result = await response.json();
      setCookie("token", result.request_token, { maxAge: 60 * 60 * 24 });
      setLoading(false);

      router.push("/", undefined, { shallow: false });
    }, 1000);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  const handleUser = (e) => {
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className={styles.login_container}>
      <div className={styles.login_wrapper}>
        <h2>Sign in</h2>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.nameContainer}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={userName}
              onChange={handleUser}
            />
            {!userName?.length && validation ? (
              <span className={styles.error}>Enter user name</span>
            ) : (
              ""
            )}
          </div>
          <div className={styles.emailContainer}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={handleEmail}
            />
            {!email?.length && validation ? (
              <span className={styles.error}>Enter email address</span>
            ) : (
              ""
            )}
          </div>
          <div>
            <button type="submit">
              {!Loading ? (
                "Login"
              ) : (
                <CircularProgress size={20} color="inherit" />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
