import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo/Logo";

const NavbarContainer = styled.nav`
  min-height: 4.25rem;
  ${tw`
    w-full
    max-w-2xl
    flex
    flex-row
    items-center
    justify-between
    lg:pl-12
    lg:pr-12
  `}
`;

export function Navbar() {
  return (
    <NavbarContainer>
      <Logo />
    </NavbarContainer>
  );
}
