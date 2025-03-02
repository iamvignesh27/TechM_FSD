import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useBreakpointValue,
  VStack,
  Heading,
  Divider,
  Checkbox,
  Text,
  Button,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Flex,
  Icon,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaFire, FaStar, FaTrophy, FaCalendarAlt, FaFilter } from 'react-icons/fa';
import { useMediaQuery } from '@chakra-ui/react';

const MotionBox = motion(Box);

const Sidebar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const isDrawer = useBreakpointValue({ base: true, md: false });
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const platforms = [
    'PC', 
    'PlayStation 5', 
    'PlayStation 4', 
    'Xbox Series X', 
    'Xbox One', 
    'Nintendo Switch', 
    'iOS', 
    'Android'
  ];

  const genres = [
    'Action', 
    'Adventure', 
    'RPG', 
    'Strategy', 
    'Shooter', 
    'Puzzle', 
    'Racing', 
    'Sports', 
    'Simulation', 
    'Indie'
  ];

  const sidebarContent = (
    <VStack align="flex-start" spacing={6} w="full" px={2}>
      <Box w="full">
        <Flex align="center" mb={4}>
          <Icon as={FaFilter} mr={2} color="brand.500" />
          <Heading size="md">Filters</Heading>
        </Flex>
        <Divider mb={4} />
      </Box>

      <Box w="full">
        <Flex align="center" mb={4}>
          <Icon as={FaStar} mr={2} color="yellow.500" />
          <Heading size="sm">Ratings</Heading>
        </Flex>
        <RangeSlider
          aria-label={['min', 'max']}
          defaultValue={[0, 5]}
          min={0}
          max={5}
          step={0.1}
          colorScheme="brand"
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} boxSize={4} />
          <RangeSliderThumb index={1} boxSize={4} />
        </RangeSlider>
        <Flex justify="space-between" mt={2}>
          <Text fontSize="sm">0</Text>
          <Text fontSize="sm">5</Text>
        </Flex>
      </Box>

      <Box w="full">
        <Flex align="center" mb={4}>
          <Icon as={FaTrophy} mr={2} color="green.500" />
          <Heading size="sm">Metacritic</Heading>
        </Flex>
        <RangeSlider
          aria-label={['min', 'max']}
          defaultValue={[0, 100]}
          min={0}
          max={100}
          step={1}
          colorScheme="brand"
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} boxSize={4} />
          <RangeSliderThumb index={1} boxSize={4} />
        </RangeSlider>
        <Flex justify="space-between" mt={2}>
          <Text fontSize="sm">0</Text>
          <Text fontSize="sm">100</Text>
        </Flex>
      </Box>

      <Box w="full">
        <Flex align="center" mb={4}>
          <Icon as={FaCalendarAlt} mr={2} color="blue.500" />
          <Heading size="sm">Release Year</Heading>
        </Flex>
        <RangeSlider
          aria-label={['min', 'max']}
          defaultValue={[2000, 2025]}
          min={1990}
          max={2025}
          step={1}
          colorScheme="brand"
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} boxSize={4} />
          <RangeSliderThumb index={1} boxSize={4} />
        </RangeSlider>
        <Flex justify="space-between" mt={2}>
          <Text fontSize="sm">1990</Text>
          <Text fontSize="sm">2025</Text>
        </Flex>
      </Box>

      <Box w="full">
        <Flex align="center" mb={4}>
          <Icon as={FaFire} mr={2} color="orange.500" />
          <Heading size="sm">Platforms</Heading>
        </Flex>
        <VStack align="flex-start" spacing={2}>
          {platforms.map((platform, index) => (
            <Checkbox 
              key={index} 
              colorScheme="brand"
              borderColor={borderColor}
            >
              {platform}
            </Checkbox>
          ))}
        </VStack>
      </Box>

      <Box w="full">
        <Heading size="sm" mb={4}>Genres</Heading>
        <VStack align="flex-start" spacing={2}>
          {genres.map((genre, index) => (
            <Checkbox 
              key={index} 
              colorScheme="brand"
              borderColor={borderColor}
            >
              {genre}
            </Checkbox>
          ))}
        </VStack>
      </Box>

      <Button
        colorScheme="brand"
        size="md"
        w="full"
        mt={4}
      >
        Apply Filters
      </Button>
    </VStack>
  );

  if (isDrawer) {
    return (
      <>
        <Box position="fixed" bottom="20px" right="20px" zIndex="999">
          <IconButton
            aria-label="Open filters"
            icon={<FaFilter />}
            colorScheme="brand"
            size="lg"
            borderRadius="full"
            boxShadow="lg"
            onClick={onOpen}
          />
        </Box>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
          <DrawerOverlay />
          <DrawerContent bg={bgColor}>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Game Filters</DrawerHeader>
            <DrawerBody py={4}>{sidebarContent}</DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <MotionBox
      display={{ base: 'none', md: 'block' }}
      w="250px"
      bg={bgColor}
      p={4}
      borderRight="1px"
      borderColor={borderColor}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      h="calc(100vh - 64px)"
      position="sticky"
      top="64px"
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#CBD5E0',
          borderRadius: '24px',
        },
      }}
    >
      {sidebarContent}
    </MotionBox>
  );
};

export default Sidebar;