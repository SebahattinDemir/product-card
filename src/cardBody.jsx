/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import products from "./products.json";
import CardProduct from "./cardProduct";

const CardBody = () => {
  return (
    <Container className="my-4 ">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map((item) => (
          <Col key={item.id}>
            <CardProduct {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardBody;
