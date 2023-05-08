import Group from "../images/Group 8.png";
import { Link } from "react-router-dom";
import {
    Heading,
    Center,
    Text,
    Button,
    Input,
    Checkbox,
  } from "@chakra-ui/react";

function LogIn(){
    return <div style={{display:"flex", justifyContent:"space-between", width:"100%", height :"100vh"}}>
        <div style={{width:"50%", height :"100%", }}>
            <Link to="/">
        <img src={Group} alt="" style={{width:"120px",position:"fixed", zIndex:"11", margin:"20px 0px 0px 45px"}} />
            </Link>
            <Center>
            <Heading position="fixed" zIndex="11" fontSize="50px" fontWeight="normal" m="1000px 0px 0px 0px" color="#fff">Welcome to <span style={{color:"#FFC42D"}}>Downhill</span></Heading>
            </Center>
            <div style={{width:"100%", height :"100%",background:"black" }}>
           
            <img style={{objectFit:"cover", width:"100%", height:"100%", opacity:"40%"}} src="https://images.unsplash.com/photo-1563692712050-3e68350add0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="image" />

            </div>
        </div>
        <div>

        </div>
    </div>
}

export default LogIn;