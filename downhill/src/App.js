import "./App.css";
import Navbar from "./components/Navbar";
import { NavLink } from "react-router-dom";
import { Heading, Center, Text } from "@chakra-ui/react";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading as="h1" fontSize="350px" fontWeight="normal" color="#615D52">
        <Center>Downhill</Center>
      </Heading>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 60px 0px 60px",
        }}
      >
        <img src={image1} style={{ width: "220px" }} alt="image1" />

        <div style={{ width: "400px" }}>
          <Text fontSize="20px" fontWeight="medium" textAlign="center">
            <Center>Make waves</Center>
          </Text>

          <Text fontSize="42px" fontWeight="medium" textAlign="center">
            <Center>NEW COLLECTION SUMMER twenty 22 CURATED BY DOWNHILL</Center>
          </Text>

          <Center>
            <NavLink
              to="/products"
              style={{
                color: "black",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              GO SHOPPING
            </NavLink>
          </Center>
        </div>

        <img src={image2} style={{ width: "200px" }} alt="image2" />
      </div>
    </div>
  );
}

export default App;
