import "../App.css";
import Navbar from "../components/Navbar";
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/Footer";

import {
    Heading,
    Center,
    Text,
    Button,
    Input,
    Checkbox,
  } from "@chakra-ui/react";
  import image1 from "../images/image1.jpg";
  import image2 from "../images/image2.jpg";
  import skate2 from "../images/skate2.png";
  import skate4 from "../images/skate4.png";
  import skate3 from "../images/skate3.png";
  import skate5 from "../images/skate5.png";
  import skate6 from "../images/skate6.png";
  import skate7 from "../images/skate7.png";
  import photo1 from "../images/photo1.jpg";
  import skate8 from "../images/skate8.png";

function Home(){
    return <div>

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

        <img
          src={image2}
          style={{ width: "200px", objectFit: "cover" }}
          alt="image2"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "130px 60px 0px 60px",
          alignItems: "end",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ background: "#d6d7d2", padding: "20px" }}>
              <img src={skate2} alt="skate2" style={{ height: "500px" }} />
            </div>
            <div style={{ width: "45%", padding: "6px" }}>
              LOST X DOWNHILL 90" RNF RETRO SERFKATE COMPLETE C7 $230.02
            </div>
          </div>

          <div style={{ margin: "0px 0px 0px 14px" }}>
            <Text fontSize="40px" fontWeight="medium">
              LOST COLLECTION
            </Text>
            <div style={{ width: "220px" }}>
              <Text fontSize="16px" fontWeight="medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                cum nostrum dolor, beatae totam laboriosam adipisci itaque
              </Text>
              <Link to="/products">
              <Button
                colorScheme="yellow"
                borderRadius="0px"
                w="280px"
                m="20px 0px 20px 0px"
              >
                Go shopping
              </Button>
              </Link>
              
              <div
                style={{
                  background: "#d6d7d2",
                  padding: "20px",
                  width: "280px",
                  height: "280px",
                }}
              >
                <img
                  src={skate4}
                  alt="skate4"
                  style={{ width: "90%", margin: "auto" }}
                />
              </div>
              <div style={{ padding: "6px" }}>
                LOST X DOWNHILL 90" RNF RETRO SERFKATE COMPLETE C7 $230.02
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: "280px", background: "#ffe5a3" }}>
          <div
            style={{
              background: "#d6d7d2",
              padding: "20px",
              width: "280px",
              height: "280px",
            }}
          >
            <img
              src={skate3}
              alt="skate3"
              style={{ width: "58%", margin: "auto" }}
            />
          </div>
          <div style={{ width: "80%", padding: "6px" }}>
            LOST X DOWNHILL 90" RNF RETRO SERFKATE COMPLETE C7 $230.02
          </div>
        </div>
      </div>

      {/* {------------------------------------------} */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "130px 60px 0px 60px",
          alignItems: "end",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "280px" }}>
            <div
              style={{
                background: "#d6d7d2",
                padding: "20px",
                width: "280px",
                height: "280px",
              }}
            >
              <img
                src={skate6}
                alt="skate6"
                style={{ width: "100%", margin: "auto" }}
              />
            </div>
            <div style={{ width: "80%", padding: "6px" }}>
              LOST X DOWNHILL 90" RNF RETRO SERFKATE COMPLETE C7 $230.02
            </div>
          </div>

          <div style={{ margin: "0px 0px 0px 14px" }}>
            <div
              style={{
                background: "#d6d7d2",
                padding: "20px",
                width: "280px",
                height: "280px",
              }}
            >
              <img
                src={skate7}
                alt="skate7"
                style={{ width: "100%", margin: "70px auto" }}
              />
            </div>
            <div style={{ padding: "6px", width: "250px" }}>
              LOST X DOWNHILL 90" RNF RETRO SERFKATE COMPLETE C7 $230.02
            </div>
          </div>

          <div style={{ margin: "0px 0px 0px 14px" }}>
            <Text fontSize="40px" fontWeight="medium">
              TOP PRODUCTS
            </Text>
            <div style={{ width: "220px" }}>
              <Text fontSize="16px" fontWeight="medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                cum nostrum dolor
              </Text>
              <Link to="/products">
              <Button
                colorScheme="yellow"
                borderRadius="0px"
                w="280px"
                m="20px 0px 20px 0px"
              >
                Go shopping
              </Button>
              </Link>
             
            </div>
          </div>
        </div>

        <div style={{ width: "280px" }}>
          <div
            style={{
              background: "#d6d7d2",
              padding: "20px",
              width: "280px",
              height: "280px",
            }}
          >
            <img
              src={skate5}
              alt="skate5"
              style={{ width: "100%", margin: "auto" }}
            />
          </div>
          <div style={{ width: "80%", padding: "6px" }}>
            LOST X DOWNHILL 90" RNF RETRO SERFKATE COMPLETE C7 $230.02
          </div>
        </div>
      </div>

      {/* {------------------------------------------} */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "130px 60px 0px 60px",
          alignItems: "end",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ background: "#d6d7d2" }}>
              <img
                src={photo1}
                alt="photo1"
                style={{ height: "540px", width: "540px", objectFit: "cover" }}
              />
            </div>
          </div>

          <div style={{ margin: "0px 0px 0px 14px" }}>
            <Text fontSize="40px" fontWeight="medium">
              ABOUT DOWNHILL
            </Text>
            <div style={{ width: "260px" }}>
              <Text fontSize="16px" fontWeight="medium" m="0px 0px 20px 0px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                cum nostrum dolor, beatae totam laboriosam adipisci itaque cum
                nostrum dolor, beatae totam laboriosam adipisci itaque
              </Text>

              <NavLink
                style={{ textDecoration: "underline", fontSize: "18px" }}
              >
                View More
              </NavLink>
            </div>
          </div>
        </div>

        <div style={{ width: "280px", background: "#ffe5a3" }}>
          <div
            style={{
              background: "#d6d7d2",
              padding: "20px",
              width: "280px",
              height: "285px",
            }}
          >
            <img
              src={skate8}
              alt="skate8"
              style={{ width: "58%", margin: "24px auto" }}
            />
          </div>
        </div>
      </div>

      {/* -------------------------------------------------- */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "130px 60px 0px 60px",
          alignItems: "end",
        }}
      >
        <div style={{ width: "280px", background: "#d6d7d2" }}>
          <div
            style={{
              width: "280px",
              height: "280px",
            }}
          >
            <img
              src="https://www.healthychildren.org/SiteCollectionImagesArticleImages/MicrosoftTeams-image%20(1).jpg?RenditionID=6"
              alt="skate3"
              style={{
                width: "100%",
                height: "100%",
                margin: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ width: "300px" }}>
              <Text fontSize="40px" fontWeight="medium">
                FOLLOW US ON INSTAGRAM
              </Text>
            </div>

            <div style={{ width: "220px" }}>
              <Text fontSize="16px" fontWeight="medium" m="0px 0px 20px 0px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                cum nostrum dolor, beatae totam laboriosam adipisci itaque
              </Text>
              <div
                style={{
                  background: "#d6d7d2",
                  width: "280px",
                  height: "280px",
                }}
              >
                <img
                  src="https://www.reliance-foundry.com/wp-content/uploads/public-skateboarding.jpg"
                  alt="skate4"
                  style={{
                    width: "100%",
                    height: "100%",
                    margin: "auto",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>

          <div style={{ background: "#d6d7d2", width: "550px" }}>
            <img
              src="https://exerciseright.com.au/wp-content/uploads/2021/07/kevin-buckert-UtfrcrmKJwE-unsplash-1-scaled.jpg"
              alt="skate2"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      
      {/* ------------------------------------------------- */}
        <Footer />
    </div>
}
export default Home