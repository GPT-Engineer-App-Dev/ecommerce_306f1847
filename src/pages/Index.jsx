import React from "react";
import { Box, Heading, Text, Image, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxWidth="1200px" mx="auto" mt={8} px={4}>
      <Stack direction={["column", "row"]} spacing={8} align="flex-start">
        <Box flex={1}>
          <Image src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbmVha2VycyUyMHByb2R1Y3QlMjBwaG90b3xlbnwwfHx8fDE3MTMyNjI4NDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product" borderRadius="md" maxHeight="500px" />
        </Box>
        <Box flex={1}>
          <Heading as="h1" size="xl" mb={4}>
            Modern Sneakers
          </Heading>
          <Text fontSize="3xl" fontWeight="bold" color="teal.500" mb={4}>
            $129.99
          </Text>
          <Text fontSize="lg" mb={8}>
            These stylish sneakers feature a sleek design with breathable mesh upper and durable rubber sole. Perfect for casual wear or light exercise. Available in multiple colors.
          </Text>
          <Button size="lg" colorScheme="teal" leftIcon={<FaShoppingCart />} _hover={{ transform: "scale(1.05)" }}>
            Add to Cart
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Index;
