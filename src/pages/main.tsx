import { Box, Flex, Icon } from '@chakra-ui/react';
import { Menu } from '../components/menu';
import { Navbar } from '../components/navbar';
import { BsGear, BsGrid, BsList, BsPerson, BsPlus } from 'react-icons/bs';
import { List } from '../components/list';

export const MainPage = () => {
  return (
    <Box w='100%' h='100%'>
      <Navbar>
        <Flex align='center' color='white'>
          <Icon as={BsList} boxSize='5' marginRight='4' />
          <Icon as={BsGrid} />
        </Flex>
        <Flex align='center' color='white'>
          <Icon as={BsPlus} boxSize='5' marginRight='4' />
          <Icon as={BsGear} marginRight='4' />
          <Icon as={BsPerson} boxSize='5' />
        </Flex>
      </Navbar>
      <Flex h='100%'>
        <Box w='300px' bg='gray.50' padding='8'>
          <Menu />
        </Box>
        <Box padding='16'>
          <List />
        </Box>
      </Flex>
    </Box>
  );
};
