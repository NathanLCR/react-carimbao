import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  max-width: 1500px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  @media (max-width: 650px) {
    padding: 0;
  }
`;
