import styled from 'styled-components';

export const Nav = styled.nav`
  height: 120px;
  background: #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 32px;
  margin-bottom: 16px;
  @media (max-width: 650px) {
    height: 100%;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
`;

export const LogoImg = styled.img`
  height: 100%;
  margin-right: auto;
  @media (max-width: 650px) {
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  color: white;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 650px) {
    margin: 0 auto;
  }
  a {
    text-align: center;
    background: white;
    margin: 0 auto;
    text-decoration: none;
    color: black;
    border-radius: 15px;
    width: 100px;
    height: 35px;
  }
`;

export const Contato = styled.a`
  margin-left: auto;
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  h1 {
    margin: 10px;
  }
  @media (max-width: 650px) {
    margin: 0 auto;
  }
`;
