import { Button,Box, Heading, HStack, IconButton, Image, Input, Text, VStack}  from '@chakra-ui/react'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useColorModeValue } from './ui/color-mode'
import { useProductStore } from '../store/product'
import { toaster } from '@/components/ui/toaster.jsx';
import {
  DialogBody,
  DialogActionTrigger,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogCloseTrigger,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {useState} from "react";

const ProductCard = ({product}) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const textColor = useColorModeValue("gray.600","gray.200");
    const bg=useColorModeValue("white", "gray.800");

    const {deleteProduct, updateProduct} =useProductStore();
    //const { isOpen, onOpen, onClose } = useDisclosure();
    const handleDeleteProduct = async (pid) => {
        const {success,message} = await deleteProduct(pid);
        if(!success){
              toaster.create({
                title:"Error",
                description: message,
                type: "error",
              });
            } else {
              toaster.create({
                title:"Success",
                description: message,
                type: "success",
              });
            }
    }
    const handleUpdateProduct = async (pid, updatedProduct) => {
      const { success, message } = await updateProduct(pid, updatedProduct);
      if (!success) {
        toaster.create({
          title: "Error",
          description: message,
          type: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toaster.create({
          title: "Success",
          description: "Product updated successfully",
          type: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    };
    return (
    <Box
        shadow='lg'
		rounded='lg'
		overflow='hidden'
		transition='all 0.3s'
		_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w='full'/>
        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {product.name}
            </Heading>

            <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                ${product.price}
            </Text>
            <HStack gap={2}>
              <DialogRoot>
                <DialogTrigger>
                  <IconButton colorPalette='blue'>
                      <FaEdit/>
                  </IconButton>
                </DialogTrigger>
                <DialogContent margin ="9">
                  <DialogCloseTrigger/>
                  <DialogHeader>
                    <DialogTitle>Update Product</DialogTitle>
                  </DialogHeader>
                  <DialogBody>
                  <VStack spacing={4}>
                    <Input
                      placeholder="Product Name"
                      name="name"
                      value={updatedProduct.name}
                      onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                    />
                    <Input
                      placeholder="Price"
                      name="price"
                      type="number"
                      value={updatedProduct.price}
                      onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                    />
                    <Input
                      placeholder="Image URL"
                      name="image"
                      value={updatedProduct.image}
                      onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                    />
                    </VStack>
                    </DialogBody>
                    <DialogFooter>
                    <DialogActionTrigger>
                      <Button
                        colorPalette='blue'
                        mr={3}
                        onClick={() => handleUpdateProduct(product._id, updatedProduct)}
                      >
                        Update
                      </Button>
                      </DialogActionTrigger>
                      <DialogActionTrigger>
                      <Button variant='ghost'>
                        Cancel
                      </Button>
                      </DialogActionTrigger>
                    </DialogFooter>
                </DialogContent>
              </DialogRoot>
				        <IconButton colorPalette='red' onClick={()=>handleDeleteProduct(product._id)}>
                    <RiDeleteBinLine />
                </IconButton>
		    </HStack>
        </Box>
    </Box>
  )
}

export default ProductCard
