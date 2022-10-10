import styled from "styled-components";
import tw from "twin.macro";

import carLogo from "../../../assets/car-logo.png";

const LogoContainer = styled.div`
  ${tw`
    flex 
    items-center
  `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
  `}
`;

const LogoImage = styled.div`
  width: auto;
  ${tw`
    h-6
    md:h-9
  `}
`;

export function Logo() {
  return (
    <LogoContainer>
      <LogoImage>
        <img src={carLogo} alt="Car Logo" />
      </LogoImage>
      <LogoText>CarsApp</LogoText>
    </LogoContainer>
  );
}
