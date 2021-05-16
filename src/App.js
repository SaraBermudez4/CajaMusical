import Caja from "./containers/Caja";
import styled from 'styled-components'
import { Container } from "@chakra-ui/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Center } from '@chakra-ui/layout'
const StyledContainer = styled(Container)`
  max-width: 135ch !important;
`

function App() {
  return (
    <ChakraProvider>
      <StyledContainer>
        <Center>
          <Caja />
        </Center>
      </StyledContainer>
    </ChakraProvider>
  );
}

export default App;
