import "../App.css";
import { Link, NavLink } from "react-router-dom";
import { Text,Input,Button,Checkbox} from "@chakra-ui/react";

function Footer() {
  return (

    <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      margin: "100px 0px 0px 0px",
      padding: "50px 60px 50px 60px",
      background: "#313131",
      color: "#ffffff",
    }}
  >
    <div>
      <Text fontWeight="normal" m="0px 0px 16px 0px">
        SUBSCRIBE
      </Text>
      <div>
        <Input
          placeholder="Enter your mail"
          variant="filled"
          borderRadius={"0px"}
          w="340px"
          h="50px"
          display={"blocked"}
        />
        <Button
          colorScheme="yellow"
          borderRadius="0px"
          w="340px"
          h="50px"
          m="10px 0px 20px 0px"
          display={"blocked"}
        >
          SUBSCRIBE
        </Button>
        <div style={{ width: "340px" }}>
          <Checkbox colorScheme="yellow" size="lg">
            <Text fontSize="12px">
              By cheking this box I am opting into marketing massages from
              Early Mejority
            </Text>
          </Checkbox>
        </div>
      </div>
    </div>

    <div
      style={{ width: "52%", display: "flex", justifyContent: "space-between" }}
    >
      <div>
        <Text fontWeight="normal" m="0px 0px 16px 0px">
          COMPANY
        </Text>
        <Link
          style={{ margin: "0px 0px 6px 0px", display: "block" }}
          className="footerLinks"
        >
          About us
        </Link>
        <Link
          style={{ margin: "0px 0px 6px 0px", display: "block" }}
          className="footerLinks"
        >
          Be an ambassador
        </Link>
        <Link
          style={{ margin: "0px 0px 6px 0px", display: "block" }}
          className="footerLinks"
        >
          Team
        </Link>
        <Link
          style={{ margin: "0px 0px 6px 0px", display: "block" }}
          className="footerLinks"
        >
          Border selector
        </Link>
      </div>
      <div>
        <Text fontWeight="normal" m="0px 0px 16px 0px">
          SUPPORT
        </Text>
        <Link
          style={{ margin: "0px 0px 6px 0px", display: "block" }}
          className="footerLinks"
        >
          Shipping and delivery
        </Link>
        <Link
          style={{ margin: "0px 0px 6px 0px", display: "block" }}
          className="footerLinks"
        >
          Return
        </Link>
        <Link
          style={{ margin: "0px 0px 6px 0px", display: "block" }}
          className="footerLinks"
        >
          FAQ
        </Link>
        <Link
          style={{ margin: "0px 0px 6px 0px", display: "block" }}
          className="footerLinks"
        >
          Size quide
        </Link>
      </div>
      <div>
        <Text fontWeight="normal" m="0px 0px 16px 0px">
          INFO
        </Text>
        <Link
          style={{ margin: "0px 0px 6px 0px", display: "block" }}
          className="footerLinks"
        >
          Terms of service
        </Link>
        <Link
          style={{ margin: "0px 0px 6px 0px", display: "block" }}
          className="footerLinks"
        >
          privasy
        </Link>
        <Link
          style={{ margin: "0px 0px 6px 0px", display: "block" }}
          className="footerLinks"
        >
          What the FAQ
        </Link>
        <Link
          style={{ margin: "0px 0px 6px 0px", display: "block" }}
          className="footerLinks"
        >
          Contact
        </Link>
      </div>
      <div>
        <Text fontWeight="normal" m="0px 0px 16px 0px">
          FOLLOW US
        </Text>
        <Link
          style={{ margin: "0px 0px 6px 0px", display: "block" }}
          className="footerLinks"
        >
          Twitter
        </Link>
        <Link
          style={{ margin: "0px 0px 6px 0px", display: "block" }}
          className="footerLinks"
        >
          Instagram
        </Link>
        <Link
          style={{ margin: "0px 0px 6px 0px", display: "block" }}
          className="footerLinks"
        >
          Facebook
        </Link>
      </div>
    </div>

  </div>


    
    
  );
}

export default Footer;
