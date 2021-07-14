import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../helpers/globals";

export const Form = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  if (success)
    return (
      <Container>
        <p>Thanks for your message</p>
      </Container>
    );

  return (
    <Container>
      <Heading>Simply fill out the form below and we will be in touch</Heading>
      <PartnerForm name="join" method="POST" action="/?success=true" netlify>
        <input type="hidden" name="form-name" value="join" />
        <FormRow>
          <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
          />
          <FormInput
            type="text"
            id="number"
            name="number"
            placeholder="Contact Number"
          />
        </FormRow>
        <FormRow>
          <FormInput
            type="text"
            id="name"
            name="name"
            placeholder="Business Name"
          />
          <FormInput
            type="text"
            id="postcode"
            name="postcode"
            placeholder="Business Postcode"
          />
        </FormRow>
        <Button type="submit">Submit</Button>
      </PartnerForm>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 32px 64px 32px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 16px 32px 16px;
  }
`;

const Heading = styled.h3`
  font-size: 28px;
  color: ${colors.blue};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 22px;
  }
`;

const PartnerForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const FormInput = styled.input`
  width: 46%;
  border: 1px solid ${colors.blue};
  padding: 16px;
  box-shadow: 5px 5px 9px -1px rgba(41, 50, 80, 0.64);
  color: ${colors.blue};

  &::placeholder {
    color: ${colors.blue};
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
    margin: 8px 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    margin: 8px 0;
  }
`;

const Button = styled.button`
  background-color: ${colors.blue};
  color: ${colors.yellow};
  border: 1px solid ${colors.blue};
  border-radius: 32px;
  padding: 16px 32px;
  font-size: 24px;
  margin-top: 16px;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`;
