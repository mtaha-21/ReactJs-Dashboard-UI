import React from "react";
import { useState } from "react";
import "./Login.css";
// import FormControl from '@mui/material/FormControl';
import Person2Icon from "@mui/icons-material/Person2";
import LockIcon from "@mui/icons-material/Lock";
// import Box from '@mui/material/Box';
// import Input from "@mui/material/Input/";
// import InputUnstyled from '@mui/base/InputUnstyled';
import { Box, FormGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { Link } from 'react-router-dom'
function Login() {
  // chng
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // console.log({ username, password });
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleApi = () => {
    console.log({ username, password });
    axios
      .post("https://reqres.in/api/login", {
        username: username,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        // alert("success");
        localStorage.setItem("token", result.data.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        alert("service error");
        console.log(error);
      });
  };

  const navigate = useNavigate();
  return (
    <div className="backgroundImg">
      <div className="logo">
        <div className="divider">
          <div className="dummy"></div>
          <div className="login-container">
            <div className="input-container">
              <div className="login-handler"></div>
              <div className="heading">
                <h3>
                  {" "}
                  Welcome to <span>SAHINS</span>
                </h3>
              </div>
              <Box style={{ display: "block" }}>
                {/* <FormControl variant="standard"> */}
                <FormGroup>
                  <div className="wrapper">
                    <div className="input">
                      <div className="icon">
                        <Person2Icon />
                      </div>
                      <input
                        style={{
                          width: "15rem",
                          height: "2rem",
                          paddingLeft: "2.5rem",
                          backgroundColor: "rgba(4, 55, 82, 0.2)",
                          border: "none",
                          // margin: "1rem 0rem",
                        }}
                        type="text"
                        // id="input-with-icon-adornment"
                        // startAdornment={<Person2Icon />}
                        placeholder="User Name"
                        value={username}
                        onChange={handleUsername}
                      />
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="input">
                      <div className="icon">
                        <LockIcon />
                      </div>
                      <input
                        style={{
                          width: "15rem",
                          height: "2rem",
                          paddingLeft: "2.5rem",
                          border: "none",
                          backgroundColor: "rgba(4, 55, 82, 0.2)",
                          // margin: "1rem 0rem",
                        }}
                        type="password"
                        // id="input-with-icon-adornment"
                        // startAdornment={<Person2Icon />}
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                      />
                    </div>
                  </div>
                  {/* <div className="input">
                    <input
                      style={{
                        width: "15rem",
                        height: "2rem",
                        backgroundColor: "rgba(4, 55, 82, 0.2)",
                      }}
                      type="password"
                      id="input-with-icon-adornment"
                      startAdornment={<LockIcon />}
                      placeholder="Password"
                    />
                  </div> */}
                </FormGroup>
                {/* </FormControl> */}
              </Box>
              <span>
                {" "}
                <p className="fgtps">Forget Password?</p>
              </span>
              <button onClick={handleApi}>Login</button>
            </div>
          </div>
          <div className="dummy2"></div>
        </div>
      </div>
    </div>
  );
}
export default Login;
