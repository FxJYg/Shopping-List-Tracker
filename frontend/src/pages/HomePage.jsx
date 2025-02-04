import ProductCard from '@/components/ProductCard'
import { useProductStore } from '../store/product'
import { Container, SimpleGrid, Text,  VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'

const HomePage = () => {
  const {fetchProduct, products} = useProductStore();

  useEffect(()=>{
    fetchProduct();
  },[fetchProduct]);
  console.log("products", products);
  return (
    <Container maxW='container.xl' py={12}>
      <VStack gap={"8px"}>
        <Text
					fontSize={"30px"}
					fontWeight={"bold"}
					bgGradient={"to-r"}
          gradientFrom={"cyan.400"}
          gradientTo={"blue.500"}
					bgClip={"text"}
					textAlign={"center"}
				>
					Current Shopping List 🚀
				</Text>
        <SimpleGrid
          minChildWidth="sm"
          maxChildWidth="sm"
          gap={10}
          w={"full"}
        >
          {products.map((product) => (
              <><ProductCard key={product._id} product={product}/>
              <Toaster>
              </Toaster>
              </>
          ))}
        </SimpleGrid>
        <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products on the list 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
              Enter a product!
							</Text>
						</Link>
            	{/* <Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Enter a product
							</Text> */}
					</Text>
      </VStack>

    </Container>
  )
}

export default HomePage
