import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "./cardProduct";
import products from "./products.json";

const CardBody = () => {
  return (
    <Container className="my-4">
      <Row xs={1} sm={2} md={3} lg={4}>
        {products.map((products) => (
          <Col key={products.id}>
            <CardProduct {...products} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardBody;
