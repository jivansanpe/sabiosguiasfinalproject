import React from "react";
import "./HeaderHome.css";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink
} from "./FooterHomeStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <FooterLink href="https://www.sabiosguiasinterpretes.com/conocenos/sabios-guias-interpretes/">Conócenos</FooterLink>
          </Column>
          <Column>
            <FooterLink href="https://www.sabiosguiasinterpretes.com/participa/">Participa</FooterLink>
          </Column>
          <Column>
            <FooterLink href="https://www.sabiosguiasinterpretes.com/contacto/">Contacto</FooterLink>
          </Column>
          <Column>
            <FooterLink href="https://www.sabiosguiasinterpretes.com/events/">Calendario</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;