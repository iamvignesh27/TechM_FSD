import React from 'react';
import { Box, Image, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { FaGamepad } from 'react-icons/fa';

interface LogoProps {
  withText?: boolean;
  size?: string;
}

const Logo: React.FC<LogoProps> = ({ withText = true, size = "24px" }) => {
  return (
    <Flex align="center">
      <Box position="relative" boxSize={size}>
        <Image
          src="/logo.png"
          alt="GameVault Logo"
          fallback={
            <Box
              as="span"
              color={useColorModeValue('brand.500', 'brand.200')}
              fontSize={size}
              lineHeight="1"
            >
              <FaGamepad />
            </Box>
          }
          boxSize={size}
        />
      </Box>
      
      {withText && (
        <Text
          fontFamily="heading"
          ml={2}
          fontSize={size === "24px" ? "xl" : size === "30px" ? "2xl" : "lg"}
          fontWeight="bold"
          bgGradient="linear(to-r, brand.500, purple.500)"
          bgClip="text"
        >
          GameVault
        </Text>
      )}
    </Flex>
  );
};

export default Logo;