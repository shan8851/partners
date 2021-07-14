import LogoImage from "../assets/Lets Eat Primary Logo Yellow.svg";
import StripImage from "../assets/strip.svg";
import styled from "styled-components";
import { breakpoints } from "../helpers/globals";
export const Header = () => {
  return (
    <HeaderBar>
      <Logo src={LogoImage} />
    </HeaderBar>
  );
};

const HeaderBar = styled.div`
  background-image: url(${StripImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;
  min-height: 300px;
  height: auto;
  display: flex;
  @media (max-width: ${breakpoints.tablet}) {
    min-height: 200px;
  }
  @media (min-width: ${breakpoints.extraLarge}) {
    min-height: 400px;
  }
`;

export const Logo = styled.img`
  height: 150px;
  width: auto;
  margin: 20px auto 0 auto;
  @media (max-width: ${breakpoints.tablet}) {
    height: 90px;
    width: auto;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 70px;
    width: auto;
  }
`;
