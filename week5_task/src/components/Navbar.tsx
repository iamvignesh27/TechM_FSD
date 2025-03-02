import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Collapse,
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaGamepad } from 'react-icons/fa';
import gamingLogo from '../assets/gaminglogo.jpg';

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { 
    isOpen: isSearchOpen, 
    onOpen: onSearchOpen, 
    onClose: onSearchClose 
  } = useDisclosure();
  const { 
    isOpen: isDrawerOpen, 
    onOpen: onDrawerOpen, 
    onClose: onDrawerClose 
  } = useDisclosure();
  
  const bg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bg}
      px={4}
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="1000"
      width="100%"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* Mobile menu button */}
          <IconButton
            size={'md'}
            icon={isDrawerOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isDrawerOpen ? onDrawerClose : onDrawerOpen}
          />

          {/* Logo and Title */}
          <Flex alignItems="center" justifyContent={{ base: 'center', md: 'flex-start' }}>
            <Box mr={2}>
              <Image 
                src={gamingLogo} 
                alt="Shadow E-Sports Logo" 
                boxSize="30px"
                fallbackSrc="https://via.placeholder.com/30"
                fallback={<FaGamepad size="24px" color={useColorModeValue('#5a0ae6', '#b18eff')} />}
              />
            </Box>
            <Text
              fontFamily={'heading'}
              fontSize="xl"
              fontWeight="bold"
              display={{ base: 'none', sm: 'block' }}
              bgGradient="linear(to-r, brand.500, purple.500)"
              bgClip="text"
            >
              Shadow E-Sports
            </Text>
          </Flex>

          {/* Desktop Search Bar */}
          <InputGroup maxW="400px" mx={4} display={{ base: 'none', md: 'flex' }}>
            <Input
              placeholder="Search games..."
              borderRadius="full"
              _hover={{ borderColor: 'brand.500' }}
              _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
            />
          </InputGroup>

          {/* Action Buttons */}
          <Stack direction={'row'} spacing={4}>
            {/* Color Mode Toggle */}
            <IconButton
              variant="ghost"
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              _hover={{ bg: 'transparent', color: 'brand.500' }}
            />
            
            {/* Sign In Button */}
            <Button
              display={{ base: 'none', sm: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'brand.500'}
              _hover={{ bg: 'brand.600' }}
              _active={{ bg: 'brand.700' }}
            >
              Sign In
            </Button>
          </Stack>
        </Flex>

        {/* Mobile Search Collapse */}
        <Collapse in={isSearchOpen} animateOpacity>
          <Box pb={4} display={{ md: 'none' }}>
            <InputGroup mt={2}>
              <Input
                placeholder="Search games..."
                borderRadius="full"
                _hover={{ borderColor: 'brand.500' }}
                _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
                autoFocus
              />
            </InputGroup>
          </Box>
        </Collapse>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        placement="left"
        onClose={onDrawerClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Flex align="center">
              <Box mr={2}>
                <Image 
                  src={gamingLogo} 
                  alt="Shadow E-Sports Logo" 
                  boxSize="24px"
                  fallbackSrc="https://via.placeholder.com/24"
                  fallback={<FaGamepad size="20px" color={useColorModeValue('#5a0ae6', '#b18eff')} />}
                />
              </Box>
              <Text
                fontFamily={'heading'}
                fontWeight="bold"
                bgGradient="linear(to-r, brand.500, purple.500)"
                bgClip="text"
              >
                Shadow E-Sports
              </Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={4} mt={4}>
              <Button 
                variant="ghost" 
                justifyContent="flex-start"
                onClick={() => {
                  onDrawerClose();
                  onSearchOpen();
                }}
              >
                Search Games
              </Button>
              <Button variant="ghost" justifyContent="flex-start">
                Home
              </Button>
              <Button variant="ghost" justifyContent="flex-start">
                My Library
              </Button>
              <Button variant="ghost" justifyContent="flex-start">
                New Releases
              </Button>
              <Button variant="ghost" justifyContent="flex-start">
                Top Rated
              </Button>
              <Button variant="ghost" justifyContent="flex-start">
                Upcoming Games
              </Button>
              <Box pt={4} borderTopWidth="1px" borderColor={borderColor}>
                <Button
                  w="full"
                  colorScheme="brand"
                  my={2}
                >
                  Sign In
                </Button>
                <Button
                  w="full"
                  variant="outline"
                  colorScheme="brand"
                >
                  Create Account
                </Button>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;