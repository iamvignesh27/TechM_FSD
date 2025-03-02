import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Text,
  Spinner,
  Flex,
  Select,
  Heading,
  Button,
  ButtonGroup,
  useColorModeValue,
  HStack,
  Input,
  FormControl,
  FormLabel,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Tag,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FiFilter } from 'react-icons/fi'; // Importing filter icon from react-icons

import GameCard from './GameCard';
import axios from 'axios';
import { motion } from 'framer-motion';

const MotionGrid = motion(Grid);
const MotionBox = motion(Box);

interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  metacritic: number;
  released: string;
  genres: { id: number; name: string }[];
  platforms: { platform: { id: number; name: string } }[];
}

interface Genre {
  id: number;
  name: string;
}

interface Platform {
  id: number;
  name: string;
}

const API_KEY = '5a7d576436e640338d4844584d611731';
const API_URL = 'https://api.rawg.io/api/games';

const GameGrid: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [ordering, setOrdering] = useState('-rating');
  const [pageSize, setPageSize] = useState(12);
  const [searchQuery, setSearchQuery] = useState('');
  const [genres, setGenres] = useState<Genre[]>([]);
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<number[]>([]);
  const [metacriticRange, setMetacriticRange] = useState([0, 100]);
  const [yearRange, setYearRange] = useState([1990, new Date().getFullYear()]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'gray.100');

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/genres', {
          params: { key: API_KEY }
        });
        setGenres(response.data.results);
      } catch (err) {
        console.error('Error fetching genres:', err);
      }
    };

    const fetchPlatforms = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/platforms', {
          params: { key: API_KEY }
        });
        setPlatforms(response.data.results);
      } catch (err) {
        console.error('Error fetching platforms:', err);
      }
    };

    fetchGenres();
    fetchPlatforms();
  }, []);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const params: any = {
          key: API_KEY,
          page,
          page_size: pageSize,
          ordering,
        };

        if (searchQuery) {
          params.search = searchQuery;
        }

        if (selectedGenres.length > 0) {
          params.genres = selectedGenres.join(',');
        }

        if (selectedPlatforms.length > 0) {
          params.platforms = selectedPlatforms.join(',');
        }

        if (metacriticRange[0] > 0 || metacriticRange[1] < 100) {
          params.metacritic = `${metacriticRange[0]},${metacriticRange[1]}`;
        }

        const currentYear = new Date().getFullYear();
        if (yearRange[0] > 1990 || yearRange[1] < currentYear) {
          const dates = [];
          for (let year = yearRange[0]; year <= yearRange[1]; year++) {
            dates.push(year.toString());
          }
          params.dates = dates.join(',');
        }

        const response = await axios.get(API_URL, { params });
        setGames(response.data.results);
        setTotalPages(Math.ceil(response.data.count / pageSize));
        setLoading(false);
      } catch (err) {
        setError('Error fetching games data');
        setLoading(false);
        console.error('Error fetching games:', err);
      }
    };

    fetchGames();
  }, [page, ordering, pageSize, searchQuery, selectedGenres, selectedPlatforms, metacriticRange, yearRange]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
  };

  const toggleGenre = (genreId: number) => {
    setSelectedGenres(prev => 
      prev.includes(genreId)
        ? prev.filter(id => id !== genreId)
        : [...prev, genreId]
    );
    setPage(1);
  };

  const togglePlatform = (platformId: number) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId)
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
    setPage(1);
  };

  const applyFilters = () => {
    onClose();
    setPage(1);
  };

  const resetFilters = () => {
    setSelectedGenres([]);
    setSelectedPlatforms([]);
    setMetacriticRange([0, 100]);
    setYearRange([1990, new Date().getFullYear()]);
    setPage(1);
  };

  if (error) {
    return (
      <Box textAlign="center" py={10}>
        <Text color="red.500">{error}</Text>
      </Box>
    );
  }

  const getSelectedGenreNames = () => {
    return selectedGenres.map(id => {
      const genre = genres.find(genre => genre.id === id);
      return genre ? genre.name : '';
    }).filter(Boolean);
  };

  const getSelectedPlatformNames = () => {
    return selectedPlatforms.map(id => {
      const platform = platforms.find(platform => platform.id === id);
      return platform ? platform.name : '';
    }).filter(Boolean);
  };

  return (
    <Box py={4} bg={bgColor} borderRadius="lg" minH="80vh">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align={{ base: 'start', md: 'center' }}
        mb={6}
        px={4}
      >
        <Heading size="lg" mb={{ base: 4, md: 0 }} color={textColor}>
          Discover Games
        </Heading>
        
        <HStack spacing={4} width={{ base: '100%', md: 'auto' }}>
          <form onSubmit={handleSearch} style={{ width: '100%' }}>
            <HStack>
              <Input
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                width={{ base: '100%', md: '200px' }}
              />
              <Button type="submit" leftIcon={<SearchIcon />} colorScheme="brand">
                Search
              </Button>
              <Button onClick={onOpen} leftIcon={<FiFilter />} variant="outline" colorScheme="brand">
                Filter
              </Button>
            </HStack>
          </form>
        </HStack>
      </Flex>

      {(selectedGenres.length > 0 || selectedPlatforms.length > 0 || metacriticRange[0] > 0 || metacriticRange[1] < 100 || yearRange[0] > 1990 || yearRange[1] < new Date().getFullYear()) && (
        <Box px={4} mb={4}>
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontWeight="bold">Active Filters:</Text>
            <Button size="sm" colorScheme="red" variant="ghost" onClick={resetFilters}>
              Reset All
            </Button>
          </Flex>
          <Wrap spacing={2}>
            {getSelectedGenreNames().map(name => (
              <WrapItem key={`genre-${name}`}>
                <Tag colorScheme="blue" size="md">{name}</Tag>
              </WrapItem>
            ))}
            {getSelectedPlatformNames().map(name => (
              <WrapItem key={`platform-${name}`}>
                <Tag colorScheme="green" size="md">{name}</Tag>
              </WrapItem>
            ))}
            {(metacriticRange[0] > 0 || metacriticRange[1] < 100) && (
              <WrapItem>
                <Tag colorScheme="purple" size="md">
                  Metacritic: {metacriticRange[0]}-{metacriticRange[1]}
                </Tag>
              </WrapItem>
            )}
            {(yearRange[0] > 1990 || yearRange[1] < new Date().getFullYear()) && (
              <WrapItem>
                <Tag colorScheme="orange" size="md">
                  Years: {yearRange[0]}-{yearRange[1]}
                </Tag>
              </WrapItem>
            )}
          </Wrap>
        </Box>
      )}

      <Flex
        justify="space-between"
        align="center"
        mb={6}
        px={4}
      >
        <HStack spacing={4}>
          <Select
            value={ordering}
            onChange={(e) => setOrdering(e.target.value)}
            w={{ base: 'full', md: '200px' }}
            borderRadius="md"
            focusBorderColor="brand.500"
          >
            <option value="-rating">Highest Rated</option>
            <option value="rating">Lowest Rated</option>
            <option value="-released">Newest</option>
            <option value="released">Oldest</option>
            <option value="-metacritic">Best Metacritic</option>
            <option value="-added">Most Popular</option>
            <option value="name">Name (A-Z)</option>
            <option value="-name">Name (Z-A)</option>
          </Select>
          
          <Select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            w={{ base: 'full', md: '150px' }}
            borderRadius="md"
            focusBorderColor="brand.500"
          >
            <option value={12}>12 per page</option>
            <option value={24}>24 per page</option>
            <option value={36}>36 per page</option>
          </Select>
        </HStack>
      </Flex>

      {loading ? (
        <Flex justify="center" align="center" py={10}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="brand.500"
            size="xl"
          />
        </Flex>
      ) : games.length > 0 ? (
        <MotionGrid
          templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={6}
          px={4}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {games.map((game) => (
            <MotionBox
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <GameCard game={game} />
            </MotionBox>
          ))}
        </MotionGrid>
      ) : (
        <Box textAlign="center" py={10}>
          <Text fontSize="xl">No games found matching your criteria</Text>
        </Box>
      )}

      <Flex justify="center" mt={10} mb={4}>
        <ButtonGroup isAttached variant="outline">
          <Button 
            onClick={handlePrevPage} 
            isDisabled={page === 1 || loading}
            colorScheme="brand"
            borderRightRadius={0}
          >
            Previous
          </Button>
          <Button 
            variant="solid" 
            colorScheme="brand"
            pointerEvents="none"
          >
            {page} of {totalPages || 1}
          </Button>
          <Button 
            onClick={handleNextPage} 
            isDisabled={page === totalPages || loading}
            colorScheme="brand"
            borderLeftRadius={0}
          >
            Next
          </Button>
        </ButtonGroup>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Filter Games</DrawerHeader>

          <DrawerBody>
            <FormControl mb={6}>
              <FormLabel fontWeight="bold">Genres</FormLabel>
              <Wrap spacing={2}>
                {genres.map(genre => (
                  <WrapItem key={genre.id}>
                    <Button
                      size="sm"
                      colorScheme={selectedGenres.includes(genre.id) ? "blue" : "gray"}
                      onClick={() => toggleGenre(genre.id)}
                      mb={1}
                    >
                      {genre.name}
                    </Button>
                  </WrapItem>
                ))}
              </Wrap>
            </FormControl>

            <FormControl mb={6}>
              <FormLabel fontWeight="bold">Platforms</FormLabel>
              <Wrap spacing={2}>
                {platforms.slice(0, 20).map(platform => (
                  <WrapItem key={platform.id}>
                    <Button
                      size="sm"
                      colorScheme={selectedPlatforms.includes(platform.id) ? "green" : "gray"}
                      onClick={() => togglePlatform(platform.id)}
                      mb={1}
                    >
                      {platform.name}
                    </Button>
                  </WrapItem>
                ))}
              </Wrap>
            </FormControl>

            <FormControl mb={6}>
              <FormLabel fontWeight="bold">Metacritic Score: {metacriticRange[0]} - {metacriticRange[1]}</FormLabel>
              <RangeSlider
                aria-label={['min', 'max']}
                defaultValue={[0, 100]}
                min={0}
                max={100}
                step={5}
                value={metacriticRange}
                onChange={setMetacriticRange}
                colorScheme="purple"
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </FormControl>

            <FormControl mb={6}>
              <FormLabel fontWeight="bold">Release Years: {yearRange[0]} - {yearRange[1]}</FormLabel>
              <RangeSlider
                aria-label={['min year', 'max year']}
                defaultValue={[1990, new Date().getFullYear()]}
                min={1990}
                max={new Date().getFullYear()}
                step={1}
                value={yearRange}
                onChange={setYearRange}
                colorScheme="orange"
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </FormControl>

            <Button colorScheme="brand" width="100%" onClick={applyFilters} mt={4}>
              Apply Filters
            </Button>
            <Button variant="outline" width="100%" onClick={resetFilters} mt={2}>
              Reset All Filters
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default GameGrid;