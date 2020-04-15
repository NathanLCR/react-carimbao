import React from 'react';
import { Container } from './styles';

export default function Product(props) {
  return (
    <Container>
      <img
        src="https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0?e=2159024400&v=beta&t=C7KMOtnrJwGrMXmgIk2u1B8a7VRfgxMwXng9cdP9kZk"
        alt=""
      />
      <h1>{props.title}</h1>
      <h2>{props.price}</h2>
    </Container>
  );
}
