import styled from "styled-components";
import JoinImage from "../assets/team.png";
import { breakpoints, colors } from "../helpers/globals";

export const JoinUsBlock = () => {
  return (
    <Container>
      <HeadingContent>
        <Heading>Join Us Today!</Heading>
        <HeaderText>
          Let's Eat - the food app that gives back. We are always on the lookout
          for fantastic new partners. Do you have a great restaurant with
          amazing food? If so we want to work with you. What do we bring to the
          table? Cutting edge sofware, slick marketing and of course we put your
          food in front of a lot of new customers.
        </HeaderText>
      </HeadingContent>
      <ImageWrapper>
        <Image src={JoinImage} />
      </ImageWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: 64px 32px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 32px 16px;
    flex-direction: column-reverse;
  }
`;

const HeadingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-right: 64px;
  color: ${colors.blue};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-right: unset;
  }
`;

const Heading = styled.h1`
  font-size: 28px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`;

const HeaderText = styled.p`
  font-size: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
