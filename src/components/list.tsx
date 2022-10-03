import { Flex, Icon, Text } from '@chakra-ui/react';
import { BsPlus } from 'react-icons/bs';

export const List = () => {
  return (
    <Flex direction='column'>
      <Flex align='baseline'>
        <Text fontSize='xl' as='b' paddingRight='2'>
          Everything
        </Text>
        <Text fontSize='sm' color='gray.400'>
          0 things
        </Text>
      </Flex>

      <Flex align='center' paddingTop='4'>
        <Icon as={BsPlus} boxSize='5' marginRight='1' color='teal.400' />
        <Text fontSize='sm' color='gray.600'>
          Add new
        </Text>
      </Flex>
    </Flex>
  );
};
