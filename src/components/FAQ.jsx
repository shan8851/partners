import styled from "styled-components";
import { breakpoints, colors } from "../helpers/globals";
import { DropdownSection } from "./DropdownSection";

export const Faq = () => {
  return (
    <Wrapper>
      <Container>
        <Title>FAQs</Title>
        <DropdownSection title="What charges can I expect to pay to join Let's Eat?">
          <Answer>
            We are happy to say that Let's Eat offers completely FREE
            activation, which means there is no charge for getting set up, we
            will send you a tablet and thermal printer at no cost to you! The
            only thing to note here is that the equipment is the property of
            Let's Eat, so it would need to be returned should we stop working
            together.
          </Answer>
          <Answer>
            Our commisions are one of the most attractive in the industry at
            just 10% (excluding VAT) on orders made through our platform. There
            is also a 50p (excluding VAT) admin charge for all orders, which is
            paid for by the customer. A simple example of our fees would be if
            you were to receive an order of £20, our commision would be £2.40
            (INCLUDING VAT)
          </Answer>
        </DropdownSection>
        <DropdownSection title="How long does it take to get on the Let's Eat platform?">
          <Answer>
            This depends, but if you have all your documents and proofs to hand
            and there are no problems we can usually get you online within a
            week.
          </Answer>
        </DropdownSection>
        <DropdownSection title="Is there a long term commitment?">
          <Answer>
            Absolutely not! We want to work with partners who see the value in
            what we bring and in turn want to work with us. It's for that reason
            that we use a simple 30 day rolling contract model. In other words
            if you are happy just do nothing and you will be able to continue
            working with us, if for whatever reason you would like to stop our
            partnership then just give us 30 days notice. Simple.
          </Answer>
        </DropdownSection>
        <DropdownSection title="Can I join Let's Eat without any delivery drivers?">
          <Answer>
            Absolutely. We work with an on demand delivery partner - Stuart - and in most instances Stuart can manage your deliveries. Please reach out to us directly to discuss this further.
          </Answer>
        </DropdownSection>
        <DropdownSection title="I want to join Let's Eat, but I run a van/unit am I still able to?">
          <Answer>
            Maybe. This would depend on what specific licences and regulations
            you have in place. More often that businesses like yours do have
            everything they need to get set up, so please do reach out to us. If
            there is anything missing that we need, we will do our best to
            advise you on how best to proceed.
          </Answer>
        </DropdownSection>
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
  max-width: 1024px;
  max-width: 1024px;
  margin: 0 auto;
`;

const Title = styled.h4`
  font-size: 28px;
  color: ${colors.blue};
  text-align: center;
`;

const Answer = styled.p`
  font-size: 15px;
  color: ${colors.blue};
  padding-bottom: 16px;
`;
