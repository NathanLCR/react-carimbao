import React from 'react';
import { Nav, LogoImg, Contato, Title } from './styles';
import { FaWhatsapp } from 'react-icons/fa';

import logoImg from '../../assets/logo.png';

export default function Navbar() {
  return (
    <Nav>
      <LogoImg src={logoImg} />
      <Title>
        Entre em contato conosco
        <a
          href="https://wa.me/5583993160522"
          target="_blank"
          rel="noopener noreferrer"
        >
          AQUI
        </a>
      </Title>
      <Contato
        href="https://wa.me/5583993160522"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={32} />
        <h1>+55 83 9316-0522</h1>
      </Contato>
    </Nav>
  );
}
