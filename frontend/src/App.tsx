import styled from "styled-components";
import tw from "twin.macro";

import { Homepage } from "./app/containers/homepage/Homepage";

const AppContainer = styled.main`
  ${tw`
  w-full
  h-full
  flex
  flex-col`}
`;

function App() {
  return (
    <AppContainer>
      <Homepage />
    </AppContainer>
  );
}

export default App;
