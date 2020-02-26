import styled from "styled-components"

export const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
  margin: 0 0 24px;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const Main = styled.main`
  flex: 1;
`;

export const FooterWrap = styled.footer`
  background-color: #f0f7f7;
  border-top: 2px solid rgba(0,0,0,.1);;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding-bottom: 24px;
  padding-top: 24px;
`;
