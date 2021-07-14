import styled from "styled-components";
import { breakpoints, colors } from "../helpers/globals";
import Image1 from "../assets/product.png";
import Image2 from "../assets/strategyWeb.png";
import Image3 from "../assets/productLaunch.png";
export const Features = () => {
  return (
    <Wrapper>
      <Container>
        <Item>
          <ItemImage src={Image1} />
          <ItemHeading>Cutting Edge Software</ItemHeading>
          <ItemText>
            Let's Eat has invested time and money into creating cutting edge
            software that will run seamlessly on any device. Your customers will
            love it. They'll save time and money with our unique rewards scheme
            and the ability to repeat orders with saved payment and delivery
            information.
          </ItemText>
        </Item>
        <Item>
          <ItemImage src={Image2} />
          <ItemHeading>Marketing on Us</ItemHeading>
          <ItemText>
            We have worked hard to create a brand, are constantly iterating over
            our product and continiously investing in marketing - both digital
            and traditional. What does this mean for you? It means we will put
            your restaurant in front of new customers all the time aka more
            orders.
          </ItemText>
        </Item>
        <Item>
          <ItemImage src={Image3} />
          <ItemHeading>Real data and Insights</ItemHeading>
          <ItemText>
            We will provide you with key facts and figures so you can figure out
            exactly what is and isn't working in your business. We are currently
            working with all of our partners to develop a stand alone partner
            application to give you the data you need.
          </ItemText>
        </Item>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f6f6f7;
  padding: 64px 32px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 32px 16px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1024px;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
`;

const ItemHeading = styled.h5`
  font-size: 24px;
  color: ${colors.blue};
  text-align: center;
`;

const ItemText = styled.p`
  font-size: 17px;
  color: ${colors.blue};
  text-align: center;
`;
