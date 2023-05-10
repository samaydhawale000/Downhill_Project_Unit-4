import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar"

import Footer from "../components/Footer";
import {
  Heading,
  Center,
  Text,
  Button,
  Input,
  Checkbox,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

import {

  ArrowBackIcon,
} from "@chakra-ui/icons";

function SingleProduct() {
  let idParams = useParams(1);

  const [SingleProductData, setSingleProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(SingleProductData);

  function fetchData() {
    setIsLoading(true);
    fetch(
      `https://mock-api-templete-downhill.onrender.com/products/${idParams.id}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSingleProductData(data);
        setIsLoading(false);
      })
      .then((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar/>
      <Link to="/products">
        <ArrowBackIcon boxSize={7} margin="100px 0px -10px 40px" />
      </Link>
      <div
        style={{
          padding: "0px 130px 45px 130px",
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "50%" }}>
          {isLoading ? (
            <Skeleton height="600px" width={"100%"} />
          ) : (
            <img
              src={SingleProductData.image}
              alt="image"
              style={{ width: "100%" }}
            />
          )}
        </div>

        <div style={{ width: "36%" }}>
          {isLoading ? (
            <div>
              <SkeletonText
                noOfLines={3}
                spacing="4"
                skeletonHeight="8"
                margin={"0px 0px 20px 0px"}
              />
              <SkeletonText
                noOfLines={1}
                spacing="1"
                skeletonHeight="5"
                margin={"0px 0px 20px 0px"}
                width={"100px"}
              />
            </div>
          ) : (
            <div>
              <Heading fontWeight={"medium"} fontSize={"40px"}>
                {SingleProductData.title}
              </Heading>

              <Text
                margin={"8px 0px 20px 0px"}
                fontSize={"24px"}
                fontWeight={"normal"}
              >
                ${SingleProductData.price}
              </Text>
            </div>
          )}

            <Button colorScheme="yellow" borderRadius="0px" w="100%" h="50px">
            Add to bag
            </Button>


          <Text
            margin={"26px 0px 6px 0px"}
            fontSize={"16px"}
            fontWeight={"normal"}
          >
            DISCRIPTION
          </Text>
          <hr style={{ border: "1px solid #dcdcdb" }} />
          <Text
            margin={"20px 0px 6px 0px"}
            fontSize={"16px"}
            fontWeight={"normal"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur explicabo beatae, quidem reprehenderit minima
            voluptatum quia facilis, numquam sit aliquid molestiae, est ducimus
            ratione animi delectus. Non ratione neque provident!
          </Text>
          <Text
            margin={"26px 0px 6px 0px"}
            fontSize={"16px"}
            fontWeight={"normal"}
          >
            Truck Option : C7
          </Text>
          <Text
            margin={"6px 0px 6px 0px"}
            fontSize={"16px"}
            fontWeight={"normal"}
          >
            Wheels : 65MM Mag Smoke 78A
          </Text>
          <Text
            margin={"6px 0px 6px 0px"}
            fontSize={"16px"}
            fontWeight={"normal"}
          >
            Truck Color Option : Black
          </Text>
          <Text
            margin={"6px 0px 6px 0px"}
            fontSize={"16px"}
            fontWeight={"normal"}
          >
            Hardware : Stanless Steel
          </Text>
          <Text
            margin={"6px 0px 6px 0px"}
            fontSize={"16px"}
            fontWeight={"normal"}
          >
            Length : 29"
          </Text>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
