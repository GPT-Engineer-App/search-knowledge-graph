import React, { useState } from "react";
import { Container, Input, VStack, Box, Text, IconButton, HStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const data = [
  { id: 1, title: "React", description: "A JavaScript library for building user interfaces" },
  { id: 2, title: "Chakra UI", description: "A simple, modular and accessible component library" },
  { id: 3, title: "GraphQL", description: "A query language for your API" },
  { id: 4, title: "JavaScript", description: "A high-level, often just-in-time compiled, and multi-paradigm programming language" },
  { id: 5, title: "TypeScript", description: "A typed superset of JavaScript that compiles to plain JavaScript" },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input placeholder="Search..." value={searchTerm} onChange={handleSearch} />
          <IconButton aria-label="Search" icon={<FaSearch />} />
        </HStack>
        <VStack spacing={4} width="100%">
          {filteredData.map((item) => (
            <Box key={item.id} p={4} borderWidth="1px" borderRadius="lg" width="100%">
              <Text fontSize="xl" fontWeight="bold">
                {item.title}
              </Text>
              <Text>{item.description}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
