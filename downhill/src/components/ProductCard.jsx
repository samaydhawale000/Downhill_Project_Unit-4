import "../App.css";
import {
  Heading,
  Center,
  Text,
  Button,
  Select,
  Input,
  Checkbox,
  Spinner,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

function ProductCard({ title, price, image,id}) {
  return (
    <div>
        <Link to={`/products/${id}`}>
        <div className="productCard">
        <div
          style={{
            width: "330px",
            height: "330px",
            padding:"2px"
          }}
        >
          <img
            src={image}
            alt="image"
            style={{ width: "100%", margin: "auto" }}
          />
        </div>
        <div style={{ padding: "6px" }}>
          {title} <Text fontWeight={"semibold"} display={"inline"}>${price}</Text>
        </div>
      </div>
        </Link>
      
    </div>
  );
}
export default ProductCard;
