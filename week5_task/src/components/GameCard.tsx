import React from 'react';
import {
  Box,
  Image,
  Text,
  Heading,
  Badge,
  HStack,
  VStack,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { FaStar, FaPlaystation, FaXbox, FaWindows, FaApple, FaLinux, FaGamepad } from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';

interface GameCardProps {
  game: {
    id: number;
    name: string;
    background_image: string;
    rating: number;
    metacritic: number;
    released: string;
    genres: { id: number; name: string }[];
    platforms: { platform: { id: number; name: string } }[];
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'white');
  const ratingColor = game.rating > 4 ? 'green.500' : game.rating > 3 ? 'yellow.500' : 'red.500';

  const getPlatformIcon = (platformName: string) => {
    const name = platformName.toLowerCase();
    if (name.includes('playstation')) return <FaPlaystation />;
    if (name.includes('xbox')) return <FaXbox />;
    if (name.includes('pc') || name.includes('windows')) return <FaWindows />;
    if (name.includes('nintendo') || name.includes('switch')) return <SiNintendo />;
    if (name.includes('mac') || name.includes('apple')) return <FaApple />;
    if (name.includes('linux')) return <FaLinux />;
    return <FaGamepad />;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'TBA';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  // Get unique platform types
  const uniquePlatforms = Array.from(
    new Set(game.platforms?.map(p => p.platform.name.split(' ')[0]) || [])
  ).slice(0, 4);

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bg={cardBg}
      boxShadow="md"
      transition="all 0.3s"
      _hover={{ boxShadow: 'xl' }}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box position="relative" overflow="hidden" height="200px">
        <Image
          src={game.background_image || 'https://via.placeholder.com/300x200?text=No+Image'}
          alt={game.name}
          objectFit="cover"
          w="100%"
          h="100%"
          transition="transform 0.5s"
          _groupHover={{ transform: 'scale(1.05)' }}
        />
        {game.metacritic && (
          <Badge
            colorScheme={game.metacritic > 75 ? 'green' : game.metacritic > 60 ? 'yellow' : 'red'}
            position="absolute"
            top={2}
            right={2}
            fontSize="sm"
            paddingX={2}
            paddingY={1}
            borderRadius="md"
            fontWeight="bold"
          >
            {game.metacritic}
          </Badge>
        )}
      </Box>

      <VStack p={4} align="stretch" flex="1" spacing={2}>
        <Heading as="h3" size="md" color={textColor} noOfLines={1}>
          {game.name}
        </Heading>
        
        <HStack>
          <Text fontSize="sm" color="gray.500">Released:</Text>
          <Text fontSize="sm" fontWeight="medium">
            {formatDate(game.released)}
          </Text>
        </HStack>
        
        <Flex align="center">
          <Box color={ratingColor} display="flex" alignItems="center" mr={2}>
            <FaStar />
          </Box>
          <Text fontWeight="bold" fontSize="sm">
            {game.rating.toFixed(1)}
          </Text>
        </Flex>

        <Box>
          <Text fontSize="xs" color="gray.500" mb={1}>
            Platforms:
          </Text>
          <HStack spacing={2}>
            {uniquePlatforms.map((platform, index) => (
              <Box key={index} color="gray.400" fontSize="lg">
                {getPlatformIcon(platform)}
              </Box>
            ))}
          </HStack>
        </Box>

        {game.genres && (
          <HStack flexWrap="wrap" mt={2}>
            {game.genres.slice(0, 3).map((genre) => (
              <Badge
                key={genre.id}
                colorScheme="brand"
                variant="subtle"
                fontSize="xs"
                borderRadius="full"
                px={2}
                py={0.5}
              >
                {genre.name}
              </Badge>
            ))}
          </HStack>
        )}
      </VStack>
    </Box>
  );
};

export default GameCard;