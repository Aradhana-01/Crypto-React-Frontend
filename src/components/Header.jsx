import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} borderBottom={"1px"} borderBottomColor="white" >
      <Button variant={"unstyled"} color={"white"} >
        <Link to="/">Home</Link>
      </Button> 
      <Button variant={"unstyled"} color={"white"} marginLeft={"5"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} marginLeft={"5"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
