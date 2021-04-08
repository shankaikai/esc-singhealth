import React, { useState, useContext } from "react";
import logo from "../assets/Singhealth-logo.png";
import {
  Button,
  TextField,
  Box,
  Typography,
  makeStyles,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { LoginContext } from "../context/LoginContext";
import Axios from "axios";
require("dotenv/config");

const useStyles = makeStyles({
  login: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingTop: "90px",
  },
  logo: {
    width: "60%",
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
  },
  marginMax: {
    width: "100%",
  },
});

const ResetEnterUsernamePage = (props) => {
  let history = useHistory();

  // Create a style object
  const classes = useStyles();

  // States to store username and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Grab setContext from LoginContext
  const { setContext } = useContext(LoginContext);

  // Function to handle a login request
  const INVALID_USERNAME = "Username does not exist!"; // check on login && register
  const INVALID_PASSWORD = "Incorrect password!"; // check on valid username

  const handleSendResetLink = (e) => {
    history.push("resetenternewpassword")
    // Axios.post("http://localhost:3001/api/auth/login", {
    //   email,
    //   password,
    // }).then((res) => {
    //   if (res.data.login_status) {
    //     // alert("LOGIN_SUCCESS");
    //     setContext({
    //       id: res.data.result,
    //       type: "tenant",
    //       name: "name",
    //     });
    //   } else {
    //     alert(res.data.reason);
    //   }
    // });


  // const handleForgetPassword = () => {
  //   Axios.post("http://localhost:3000/auth/login", {
  //     email,
  //     password,
  //   }).then((res) => {
  //     if (res.data.reason !== "INVALID_EMAIL") {
  //       Axios.post("http://localhost:3000/auth/resetpassword", { email })
  //         .then((res) => {
  //           alert("PLEASE_CHECK_YOUR_EMAIL");
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     } else {
  //       alert(res.data.reason);
  //     }
  //   });

  //   console.log("Handle forget");
};

  return (
    <div className={classes.login}>
      <img src={logo} alt="Logo" className={classes.logo}></img>
      <FormControl className={classes.form} autoComplete="true">
        <Box m={1} className={classes.marginMax}>
          <TextField
            id="Username"
            label="Username"
            variant="outlined"
            fullWidth="true"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Box>

        <Box m={1} className={classes.marginMax}>
          <Button
            variant="contained"
            color="primary"
            fullWidth="true"
            onClick={handleSendResetLink}
          >
            Send reset link
          </Button>
        </Box>
      </FormControl>
    </div>
  );
};

export default ResetEnterUsernamePage;
  