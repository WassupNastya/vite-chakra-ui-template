import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Navbar } from '../components/navbar';

interface Props {
  navbar: ReactNode;
  children?: ReactNode;
}

export const Page = (props: Props) => {
  return (
    <Box height='100%'>
      <Navbar>{props.navbar}</Navbar>
      {props.children}
    </Box>
  );
};
