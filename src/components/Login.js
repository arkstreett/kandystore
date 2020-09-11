import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import LoginForm from "../components/LoginForm";

const Container = styled.div`
  height: 100vh;
  @media (min-width: 1000px) {
    display: flex;
    width: 1000px;
    margin: 0 auto;
    height: 100%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    width: 70%;
    margin: 0 auto;
  }
  @media (min-width: 1000px) {
    width: 60%;
  }
  h1 {
    width: 80%;
    margin: 5rem auto 0 auto;
    font-weight: 500;
    font-size: 3.5rem;
  }
  p {
    width: 80%;
    margin: 0 auto 3rem auto;
    a {
      color: #ff9500;
    }
    a:visited {
      color: #ff9500;
    }
  }
`;

const Trans = ReactCSSTransitionGroup;

const fadeIn = (n, timeoutLength) => {
  return {
    transitionName: `fadeIn${n}`,
    transitionEnterTimeout: 0,
    transitionAppear: true,
    transitionAppearTimeout: timeoutLength,
    transitionLeave: true,
    transitionLeaveTimeout: 500,
  };
};

const Login = ({ setToken }) => {
  return (
    <Container>
      <FormContainer>
        <Trans {...fadeIn(1, 1000)}>
          <h1 style={{ textAlign: "center" }}>Login in to your Account</h1>
        </Trans>
        {/* <Trans {...fadeIn(2, 1500)}>
          <p style={{ textAlign: "center" }}>
            Don't have an account? <Link to="/signup">Create account</Link>
          </p>
        </Trans> */}
        <Trans {...fadeIn(3, 2000)}>
          <LoginForm setToken={setToken} />
        </Trans>
      </FormContainer>
    </Container>
  );
};

export default Login;
