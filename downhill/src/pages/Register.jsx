import { Link } from "react-router-dom";
import Group from "../images/Group 8.png";
import {
  Heading,
  Center,
  Text,
  Button,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import { Navigat, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [emailField, setEmailField] = useState(true);
  const [passField, setPassField] = useState(true);
  const [nameField, setNameField] = useState(true);

  const obj = {
    name: name,
    email: email,
    password: password,
  };

  const navigateLogin = useNavigate()
  function postData() {
    fetch("https://mock-api-templete-downhill.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .then((err) => {
        console.log(err);
      });

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Register Successfull',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {
        navigateLogin("/login")
      }, 1500);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "100vh",
      }}
    >
      <div style={{ width: "50%", height: "100%" }}>
        <Link to="/">
          <img
            src={Group}
            alt=""
            style={{
              width: "120px",
              position: "fixed",
              zIndex: "11",
              margin: "20px 0px 0px 45px",
            }}
          />
        </Link>
        <Center>
          <Heading
            position="fixed"
            zIndex="11"
            fontSize="50px"
            fontWeight="normal"
            m="1100px 0px 0px 0px"
            color="#fff"
          >
            Welcome to <span style={{ color: "#FFC42D" }}>Downhill</span>
          </Heading>
        </Center>
        <div style={{ width: "100%", height: "100%", background: "black" }}>
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              opacity: "30%",
            }}
            src="https://images.unsplash.com/photo-1563692712050-3e68350add0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt="image"
          />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", width: "50%" }}>
        <div style={{ margin: "auto", width: "500px" }}>
          <Center>
            <Heading fontWeight="medium" margin="0px 0px 50px 0px">
              Create an Accoun<span style={{ color: "#FFC42D" }}>t</span>
            </Heading>
          </Center>

          {
            emailField && passField && nameField ? <Text m="0px 0px 30px 0px" fontSize="18px" fontWeight="medium">
            Register your Account
          </Text>:
          <Text m="0px 0px 30px 0px" fontSize="18px" fontWeight="medium" color="red">
            All fields are important please enter valid information
          </Text>
          }

          <Text marginBottom="6px">Enter your name</Text>
          <Input
            placeholder="Enter your name"
            type="text"
            fontSize="18px"
            width="500px"
            border={nameField ? "2px solid #dedede" : "2px solid red"}
            height="50px"
            borderRadius="none"
            m="0px 0px 20px 0px"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <Text marginBottom="6px">Enter your E-mail</Text>
          <Input
            placeholder="example@gmail.com"
            type="email"
            fontSize="18px"
            width="500px"
            border={emailField ? "2px solid #dedede" : "2px solid red"}
            height="50px"
            borderRadius="none"
            m="0px 0px 20px 0px"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <Text marginBottom="6px">Enter your password</Text>
          <Input
            placeholder="Enter your password"
            fontSize="18px"
            type="password"
            width="500px"
            border={passField ? "2px solid #dedede" : "2px solid red"}
            height="50px"
            borderRadius="none"
            m="0px 0px 50px 0px"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <Button
            colorScheme="yellow"
            borderRadius="none"
            w="500px"
            h="50px"
            m="auto"
            diplay="block"
            fontSize="20px"
            onClick={() => {
              if (name != "" && email !== "" && password !== "") {
                postData();
              }

              if (name == "") {
                setNameField(false);
              }
              if (email == "") {
                setEmailField(false);
              }
              if (password == "") {
                setPassField(false);
              }
            }}
          >
            Register
          </Button>

          <Text m="50px 0px 0px 0px">
            Already have an Account?{" "}
            <Link to="/login">
              <span style={{ color: "#FFC42D", fontWeight: "bold" }}>
                Login here
              </span>
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Register;
