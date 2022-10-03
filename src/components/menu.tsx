import { Flex, Text } from '@chakra-ui/react';

const items = ['Everything', 'Project 1', 'Project 2', 'Project 3', 'Project 4'];

interface Props {
  name: string;
}

const MenuItem = (props: Props) => {
  return (
    <Flex margin='1' padding='0.5'>
      <Text fontSize='sm'>{props.name}</Text>
    </Flex>
  );
};

export const Menu = () => {
  return (
    <Flex direction='column'>
      {items.map((item, key) => (
        <MenuItem key={key} name={item} />
      ))}
    </Flex>
  );
};
