import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar/Navbar";

const PageContainer = styled.section`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export function Homepage() {
  return (
    <PageContainer>
      <Navbar />
    </PageContainer>
  );
}
