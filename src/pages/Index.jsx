import React, { useState } from "react";
import { Container, VStack, Text, Textarea, Box, HStack, Tooltip } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [originalTexts, setOriginalTexts] = useState([]);
  const [translatedTexts, setTranslatedTexts] = useState([]);
  const [showTranslation, setShowTranslation] = useState(Array(100).fill(false)); // Assuming max 100 texts for simplicity

  const handleTextChange = (e, setTexts) => {
    const texts = e.target.value.split(/(?<=[.!?])\s+/).map((sentence) => sentence.trim());
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
        <Box width="100%" p={4} borderWidth={1} borderRadius="md">
          <Text>
            {originalTexts.map((sentence, index) => (
              <Tooltip key={index} label={translatedTexts[index] || ""} isOpen={showTranslation[index]}>
                <Text as="span" onClick={() => toggleTranslation(index)} cursor="pointer" _hover={{ bg: "yellow.200" }}>
                  {sentence}{" "}
                </Text>
              </Tooltip>
            ))}
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
