import styled from "styled-components";
import PaymentImage from "../assets/payment.png";
import { breakpoints, colors } from "../helpers/globals";

export const Steps = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={PaymentImage} />
      </ImageWrapper>
      <HeadingContent>
        <Heading>Ready to take your business to the next level?</Heading>
        <HeaderText>
          Simply enter your details in the form above or give us a call on{" "}
          <ActionLink href="tel:44330133432">0330 133 4342 </ActionLink>and hit
          option 1 for sales and we can get the process started. We will ask you
          for some further information, get your menu uploaded into our system
          and then send out your tablet and thermal printer.
        </HeaderText>
        <HeaderText>
          Let's Eat will provide training and support for getting setup with the
          equipment and ongoing support where needed. the whole process can take
          a matter of days and your business will be live on our platform and
          you will be able to take orders.
        </HeaderText>
      </HeadingContent>
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
  margin-left: 64px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-left: unset;
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

const ActionLink = styled.a`
  color: ${colors.blue};
`;
