import { ChakraProvider } from '@chakra-ui/react';
import { MainPage } from './pages/main';

function App() {
  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  );
}

export default App;
