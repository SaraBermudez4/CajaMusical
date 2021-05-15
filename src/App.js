import Caja from "./containers/Caja";
import styled from 'styled-components'
import { Container } from "@chakra-ui/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
const StyledContainer = styled(Container)`
  padding-top:5%;
`

function App() {
  return (
    <StyledContainer>
        <Caja/>
    </StyledContainer>
  );
}

export default App;
