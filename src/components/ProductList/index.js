import React, { useState } from 'react';
import Product from '../Product';
import { Container } from './styles';

export default function ProductList() {
  const [products, setProducts] = useState([
    { title: 'Produto', price: '50.00' },
  ]);

  return (
    <Container>
      {products.map((product) => (
        <Product title={product.title} price={product.price} />
      ))}
    </Container>
  );
}
