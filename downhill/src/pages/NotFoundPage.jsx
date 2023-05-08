import image3 from "../images/image3.png";

import { Heading, Center,Text } from "@chakra-ui/react";

function NotFoundPage() {
  return (
    <div style={{ margin: "10px" }}>
      <Center>
        <Heading fontWeight="medium" fontSize={"70px"} m="20px" color="#FFC42D">
          Oops!!
        </Heading>
      </Center>
      <Center>
        <Text fontSize={"20px"}> This Page is Under maintanance, You can explore other features</Text>
      </Center>
      <img
        src={image3}
        alt="image3"
        style={{ margin: "-10px auto", width: "600px" }}
      />
    </div>
  );
}

export default NotFoundPage;
