import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react'
import { BsPlusSquare } from 'react-icons/bs';
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useColorMode} from './color-mode';

const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140"} px={16}>
        <Flex 
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}
        >            
        {/* <Link to={"/"}>Shopping List 🛒</Link> */}
        <Text
             fontSize={{ base: "22px", sm: "28px" }}
             fontWeight={"bold"}
             textTransform={"uppercase"}
             textAlign={"center"}
             bgGradient={"to-r"}
             gradientFrom={"cyan.400"}
             gradientTo={"blue.500"}
             bgClip={"text"}
        >
            <Link to={"/"}>MyShopList 🛒</Link>
        </Text>

            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                <Button>
                    <BsPlusSquare fontSize={"20px"}/>
                </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon/> : <LuSun size='20px'/>}    
                </Button>
            </HStack>
        </Flex>

    </Container>
  );
}

export default Navbar
