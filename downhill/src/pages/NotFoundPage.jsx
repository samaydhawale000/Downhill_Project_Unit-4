import image3 from "../images/image3.png";

import { Heading, Center } from "@chakra-ui/react";

function NotFoundPage() {
  return (
    <div style={{ margin: "60px" }}>
      <Center>
        <Heading fontWeight="medium" color="#FFC42D">
          This Page is Under maintanance, You can explore other features
        </Heading>
      </Center>
      <img
        src={image3}
        alt="image3"
        style={{ margin: "0px auto", width: "600px" }}
      />
    </div>
  );
}

export default NotFoundPage;
