import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import {
  Heading,
  Center,
  Text,
  Button,
  Select,
  Input,
  Skeleton,
  Checkbox,
  Spinner,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

function Products() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [search, setSearch] = useState("");

  function fetchdata() {
    setIsLoading(true);
    fetch(`https://mock-api-templete-downhill.onrender.com/products?q=${search}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsLoading(false);
      })
      .then((err) => {
        console.log(err);
      });
  }

  function fetchOrderData() {
    setIsLoading(true);
    fetch(`https://mock-api-templete-downhill.onrender.com/products?_sort=price&_order=${order}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsLoading(false);
      })
      .then((err) => {
        console.log(err);
      });
  }

  useEffect(() => {

    fetchdata();
  }, [priceSort,search]);

  useEffect(() => {
    order==""?
    fetchdata() : fetchOrderData()
  }, [order]);

  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      <div>
        <Navbar />
      </div>
      <div style={{ padding: "100px 45px 45px 45px", boxSizing: "border-box" }}>
        <Heading fontWeight={"medium"}>ALL SURFSCATE</Heading>
      </div>

      <div>
        <Text
          m="0px 45px 10px 45px"
          boxSizing="border-box"
          fontSize={"18px"}
          fontWeight="medium"
        >
          FILTER
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 45px 0px 45px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <div style={{ width: "32%" }}>
          <Select placeholder="Sort by order" width="100%" onChange={(e)=>{
            setOrder(e.target.value)
            console.log(e.target.value)
          }}>
            <option value="asc">Sort by ascending order</option>
            <option value="desc">Sort by Descending order</option>
          </Select>
        </div>
        <div style={{ width: "32%" }}>
          <Select placeholder="Filter by price" width="100%" onChange={(e)=>{
            setPriceSort(e.target.value)
          }}>
            <option value="below $200">Below $200</option>
            <option value="$200 to $400">$200 to $400</option>
            <option value="above $400">Above $400</option>
          </Select>
        </div>
        <div style={{ width: "32%" }}>
          <InputGroup>
            <InputLeftElement>
              <SearchIcon color="#8e8d8c" />
            </InputLeftElement>
            <Input placeholder="Search Surfscates" paddingLeft={"44px"} onChange={(e)=>{
              setSearch(e.target.value)
            }} />
          </InputGroup>
        </div>
      </div>
      {/* ---------------------------------------------- */}

      {isLoading ? (
        <div style={{
          padding: "0px 45px 0px 45px",
          margin: "45px auto",
          boxSizing: "border-box",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap:"60px 32px"
        }}>
          <Skeleton height='350px' width="330px" borderRadius={"none"} />
          <Skeleton height='350px' width="330px" borderRadius={"none"} />
          <Skeleton height='350px' width="330px" borderRadius={"none"} />
          <Skeleton height='350px' width="330px" borderRadius={"none"} />
          <Skeleton height='350px' width="330px" borderRadius={"none"} />
          <Skeleton height='350px' width="330px" borderRadius={"none"} />
          <Skeleton height='350px' width="330px" borderRadius={"none"} />
          <Skeleton height='350px' width="330px" borderRadius={"none"} />
          <Skeleton height='350px' width="330px" borderRadius={"none"} />
          <Skeleton height='350px' width="330px" borderRadius={"none"} />
          <Skeleton height='350px' width="330px" borderRadius={"none"} />
          <Skeleton height='350px' width="330px" borderRadius={"none"} />
        </div>
      ) : (
        <div
          style={{
            padding: "0px 45px 0px 45px",
            margin: "45px auto",
            boxSizing: "border-box",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap:"60px 32px"
          }}
        >
          {data.map((e) => {

            if(priceSort == "above $400"){
              if(e.price>400){
                return (
              
                  <ProductCard
                    title={e.title}
                    price={e.price}
                    image={e.image}
                    id={e.id}
                  />
                );
              }
            }
            else if(priceSort=="below $200"){

              if(e.price<=200){
                return (
              
                  <ProductCard
                    title={e.title}
                    price={e.price}
                    image={e.image}
                    id={e.id}
                  />
                );
              }
            }
            else if(priceSort=="$200 to $400"){
              if(e.price>200 && e.price<=400){
                return (
              
                  <ProductCard
                    title={e.title}
                    price={e.price}
                    image={e.image}
                    id={e.id}
                  />
                );
              }
            }
            else{
              return (
              
                <ProductCard
                  title={e.title}
                  price={e.price}
                  image={e.image}
                  id={e.id}
                />
              );
            }
            
          })}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Products;
