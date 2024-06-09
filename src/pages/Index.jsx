import React, { useState } from "react";
import { Container, VStack, Text, Button, Input, Box, HStack } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [originalTexts, setOriginalTexts] = useState([]);
  const [translatedTexts, setTranslatedTexts] = useState([]);
  const [showTranslation, setShowTranslation] = useState(Array(100).fill(false)); // Assuming max 100 texts for simplicity

  const handleFileUpload = (e, setTexts) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const texts = event.target.result.split("\n").map((line) => line.trim());
      setTexts(texts);
    };
    reader.readAsText(file);
  };

  const toggleTranslation = (index) => {
    const newShowTranslation = [...showTranslation];
    newShowTranslation[index] = !newShowTranslation[index];
    setShowTranslation(newShowTranslation);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <HStack spacing={4} width="100%">
          <Input type="file" accept=".txt" onChange={(e) => handleFileUpload(e, setOriginalTexts)} />
          <Input type="file" accept=".txt" onChange={(e) => handleFileUpload(e, setTranslatedTexts)} />
        </HStack>
        <VStack spacing={2} width="100%">
          {originalTexts.map((text, index) => (
            <Box key={index} width="100%" p={4} borderWidth={1} borderRadius="md" onClick={() => toggleTranslation(index)} cursor="pointer">
              <Text>{text}</Text>
              {showTranslation[index] && translatedTexts[index] && <Text color="gray.500">{translatedTexts[index]}</Text>}
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
