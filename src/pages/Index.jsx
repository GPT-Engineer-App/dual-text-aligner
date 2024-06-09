import React, { useState } from "react";
import { Container, VStack, Text, Textarea, Box, HStack } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [originalTexts, setOriginalTexts] = useState([]);
  const [translatedTexts, setTranslatedTexts] = useState([]);
  const [showTranslation, setShowTranslation] = useState(Array(100).fill(false)); // Assuming max 100 texts for simplicity

  const handleTextChange = (e, setTexts) => {
    const texts = e.target.value.split("\n").map((line) => line.trim());
    setTexts(texts);
  };

  const toggleTranslation = (index) => {
    const newShowTranslation = [...showTranslation];
    newShowTranslation[index] = !newShowTranslation[index];
    setShowTranslation(newShowTranslation);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <VStack spacing={4} width="100%">
          <Textarea placeholder="Enter original texts here, one per line" onChange={(e) => handleTextChange(e, setOriginalTexts)} />
          <Textarea placeholder="Enter translated texts here, one per line" onChange={(e) => handleTextChange(e, setTranslatedTexts)} />
        </VStack>
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
