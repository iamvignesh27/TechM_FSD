import React, { useState } from "react";
import gamingLogo from "../assets/gaminglogo.jpg";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  SimpleGrid,
  useColorModeValue,
  Flex,
  Heading,
  IconButton,
  Divider,
  Input,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaTwitch,
  FaDiscord,
  FaGamepad,
} from "react-icons/fa";

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

// Modal content components
const PrivacyPolicyContent = () => (
  <>
    <Heading as="h3" size="md" mb={4}>
      Privacy Policy
    </Heading>
    <Text mb={3}>Last updated: March 1, 2025</Text>

    <Heading as="h4" size="sm" mb={2} mt={4}>
      1. Information We Collect
    </Heading>
    <Text mb={3}>
      We collect information you provide directly to us when you create an
      account, subscribe to our newsletter, or contact us. This may include your
      name, email address, and gaming preferences.
    </Text>

    <Heading as="h4" size="sm" mb={2} mt={4}>
      2. How We Use Your Information
    </Heading>
    <Text mb={3}>
      We use your information to provide, maintain, and improve our services,
      communicate with you about updates and promotions, and personalize your
      gaming experience.
    </Text>

    <Heading as="h4" size="sm" mb={2} mt={4}>
      3. Cookies and Tracking Technologies
    </Heading>
    <Text mb={3}>
      We use cookies and similar tracking technologies to track activity on our
      website and collect certain information. You can set your browser to
      refuse all or some browser cookies, but this may limit your ability to use
      some features.
    </Text>

    <Heading as="h4" size="sm" mb={2} mt={4}>
      4. Data Security
    </Heading>
    <Text mb={3}>
      We implement appropriate security measures to protect your personal
      information against unauthorized access, alteration, disclosure, or
      destruction.
    </Text>
  </>
);

const AboutUsContent = () => (
  <>
    <Heading as="h3" size="md" mb={4}>
      About GameVault
    </Heading>
    <Text mb={4}>
      Founded in 2023, Shadow E-Sports is passionate about connecting gamers
      with their next favorite gaming experience. Our platform aggregates game
      information from multiple sources to provide a comprehensive database of
      games across all platforms.
    </Text>

    <Heading as="h4" size="sm" mb={2} mt={4}>
      Our Mission
    </Heading>
    <Text mb={4}>
      To create the ultimate destination for gamers to discover, track, and
      share their gaming experiences. We believe that gaming is for everyone,
      and we're committed to making game discovery accessible and enjoyable.
    </Text>

    <Heading as="h4" size="sm" mb={2} mt={4}>
      Our Team
    </Heading>
    <Text mb={4}>
      Our diverse team consists of passionate gamers, developers, and industry
      experts who work tirelessly to bring you the most accurate and up-to-date
      gaming information. We're headquartered in San Francisco with remote team
      members across the globe.
    </Text>

    <Heading as="h4" size="sm" mb={2} mt={4}>
      Powered by RAWG
    </Heading>
    <Text mb={3}>
      Shadow E-Sports is powered by the RAWG Video Games Database API, allowing
      us to provide detailed information on thousands of games. We continuously
      work to enhance our platform with additional features and improvements.
    </Text>
  </>
);

const TermsOfServiceContent = () => (
  <>
    <Heading as="h3" size="md" mb={4}>
      Terms of Service
    </Heading>
    <Text mb={3}>Effective Date: March 1, 2025</Text>

    <Heading as="h4" size="sm" mb={2} mt={4}>
      1. Introduction
    </Heading>
    <Text mb={3}>
      By accessing or using GameVault, you agree to comply with our terms and
      policies.
    </Text>

    <Heading as="h4" size="sm" mb={2} mt={4}>
      2. User Responsibilities
    </Heading>
    <Text mb={3}>
      Users must provide accurate information and follow community guidelines
      while using our services.
    </Text>

    <Heading as="h4" size="sm" mb={2} mt={4}>
      3. Termination
    </Heading>
    <Text mb={3}>
      We reserve the right to terminate accounts that violate our policies.
    </Text>
  </>
);

const ContactUsContent = () => (
  <>
    <Heading as="h3" size="md" mb={4}>
      Contact Us
    </Heading>
    <Text mb={3}>Have questions? Reach out to us!</Text>
    <Text>Email: support@shadowesports.com</Text>
    <Text>Phone: +1 800 123 4567</Text>
    <Text mb={3}>Address: 123 Gaming Street, San Francisco, CA</Text>
  </>
);

const HelpCenterContent = () => (
  <>
    <Heading as="h3" size="md" mb={4}>
      Help Center
    </Heading>
    <Text mb={3}>Find answers to common questions.</Text>

    <Heading as="h4" size="sm" mb={2} mt={4}>
      1. How do I create an account?
    </Heading>
    <Text mb={3}>Click on the sign-up button and follow the instructions.</Text>

    <Heading as="h4" size="sm" mb={2} mt={4}>
      2. How can I reset my password?
    </Heading>
    <Text mb={3}>
      Go to the login page and click "Forgot Password" to reset.
    </Text>
  </>
);

const Footer: React.FC = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  // Modal states using useDisclosure hook
  const {
    isOpen: isPrivacyOpen,
    onOpen: onPrivacyOpen,
    onClose: onPrivacyClose,
  } = useDisclosure();
  const {
    isOpen: isAboutOpen,
    onOpen: onAboutOpen,
    onClose: onAboutClose,
  } = useDisclosure();
  const {
    isOpen: isTermsOpen,
    onOpen: onTermsOpen,
    onClose: onTermsClose,
  } = useDisclosure();
  const {
    isOpen: isContactOpen,
    onOpen: onContactOpen,
    onClose: onContactClose,
  } = useDisclosure();
  const {
    isOpen: isHelpOpen,
    onOpen: onHelpOpen,
    onClose: onHelpClose,
  } = useDisclosure();

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically send the email to your backend
    }
  };

  return (
    <Box
      bg={bgColor}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTop="1px"
      borderColor={borderColor}
      mt="auto"
      width="100%"
    >
      <Container as={Stack} maxW={"container.xl"} py={10}>
        <SimpleGrid
          templateColumns={{
            base: "1fr",
            sm: "1fr 1fr",
            md: "2fr 1fr 1fr 1fr",
          }}
          spacing={{ base: 6, md: 8 }}
        >
          <Stack spacing={6}>
            <Flex align="center">
              <Box mr={2}>
                <Image
                  src={gamingLogo}
                  alt="GameVault Logo"
                  boxSize="30px"
                  fallbackSrc="https://via.placeholder.com/30"
                  fallback={
                    <FaGamepad
                      size="24px"
                      color={useColorModeValue("#5a0ae6", "#b18eff")}
                    />
                  }
                />
              </Box>
              <Text
                fontFamily={"heading"}
                fontSize="xl"
                fontWeight="bold"
                bgGradient="linear(to-r, brand.500, purple.500)"
                bgClip="text"
              >
                Shadow E-Sports
              </Text>
            </Flex>
            <Text fontSize={"sm"}>
              Your ultimate destination for discovering and exploring the gaming
              universe. Powered by RAWG API.
            </Text>
            <Stack
              direction={"row"}
              spacing={4}
              justify={{ base: "center", md: "flex-start" }}
              wrap="wrap"
            ></Stack>
          </Stack>

          <Stack align={{ base: "center", md: "flex-start" }}>
            <ListHeader>Company</ListHeader>
            <Link onClick={onAboutOpen} cursor="pointer">
              About Us
            </Link>
            <Link onClick={onContactOpen} cursor="pointer">
              Contact Us
            </Link>
          </Stack>

          <Stack align={{ base: "center", md: "flex-start" }}>
            <ListHeader>Support</ListHeader>
            <Link onClick={onHelpOpen} cursor="pointer">
              Help Center
            </Link>
            <Link onClick={onPrivacyOpen} cursor="pointer">
              Privacy Policy
            </Link>
            <Link onClick={onTermsOpen} cursor="pointer">
              Terms of Service
            </Link>
          </Stack>

          <Stack align={{ base: "center", md: "flex-start" }}>
            <ListHeader>Newsletter</ListHeader>
            <Text fontSize={"sm"} textAlign={{ base: "center", md: "left" }}>
              Subscribe for the latest gaming news and updates.
            </Text>
            {isSubscribed ? (
              <Text color="green.500" fontSize="sm">
                Thank you for subscribing!
              </Text>
            ) : (
              <Stack
                direction={{ base: "column", sm: "row" }}
                width="100%"
                spacing={2}
              >
                <Input
                  placeholder={"Your email address"}
                  bg={useColorModeValue("gray.100", "gray.700")}
                  border={0}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  _focus={{
                    bg: useColorModeValue("gray.200", "gray.600"),
                    borderColor: "brand.500",
                  }}
                />
                <Button
                  colorScheme="brand"
                  _hover={{
                    bg: "brand.600",
                  }}
                  onClick={handleSubscribe}
                  isDisabled={!email}
                  flexShrink={0}
                >
                  Subscribe
                </Button>
              </Stack>
            )}
          </Stack>
        </SimpleGrid>
      </Container>

      <Divider borderColor={borderColor} />

      <Box py={6}>
        <Container maxW={"container.xl"}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify={{ base: "center", md: "space-between" }}
            align="center"
            textAlign={{ base: "center", md: "left" }}
          >
            <Text fontSize={"sm"}>© 2025 Shadow E-Sports. All rights reserved</Text>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 2, sm: 6 }}
              mt={{ base: 4, md: 0 }}
              align="center"
            >
              <Link onClick={onPrivacyOpen} fontSize={"sm"} cursor="pointer">
                Privacy
              </Link>
              <Link onClick={onTermsOpen} fontSize={"sm"} cursor="pointer">
                Terms
              </Link>
              <Link onClick={onPrivacyOpen} fontSize={"sm"} cursor="pointer">
                GDPR
              </Link>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={isPrivacyOpen}
        onClose={onPrivacyClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx={2}>
          <ModalHeader>Privacy Policy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PrivacyPolicyContent />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brand" mr={3} onClick={onPrivacyClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* About Us Modal */}
      <Modal
        isOpen={isAboutOpen}
        onClose={onAboutClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx={2}>
          <ModalHeader>About Us</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AboutUsContent />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brand" mr={3} onClick={onAboutClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={isTermsOpen}
        onClose={onTermsClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx={2}>
          <ModalHeader>Terms of Service</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TermsOfServiceContent />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brand" mr={3} onClick={onTermsClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Contact Us Modal */}
      <Modal
        isOpen={isContactOpen}
        onClose={onContactClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx={2}>
          <ModalHeader>Contact Us</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ContactUsContent />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brand" mr={3} onClick={onContactClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Help Center Modal */}
      <Modal
        isOpen={isHelpOpen}
        onClose={onHelpClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx={2}>
          <ModalHeader>Help Center</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HelpCenterContent />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brand" mr={3} onClick={onHelpClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Footer;
