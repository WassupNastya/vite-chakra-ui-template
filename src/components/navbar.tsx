import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface NavbarProps {
  children: ReactNode;
}

export const Navbar = (props: NavbarProps) => {
  return (
    <Flex
      paddingTop='2'
      paddingBottom='2'
      paddingRight='10'
      paddingLeft='10'
      justify='space-between'
      backgroundColor='teal.400'
    >
      {props.children}
    </Flex>
  );
};
