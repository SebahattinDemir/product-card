import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./rating";

const CardProduct = (props) => {
  const { image, title, desc, price, rating, discountPercentage } = props;

  const addToCart = () => {
    alert(`Added ${title} to cart`);
  };

  return (
    <Card className="text-center">
      <Card.Body>
        <div className="position-relative">
          <Card.Subtitle className="position-absolute top-0 rounded-3 p-2  text-light bg-success me-3">
            -{discountPercentage}%
          </Card.Subtitle>
          <Card.Img variant="top" src={`img/${image}`} />
        </div>
        <Card.Title className="mt-4">{title}</Card.Title>
        <Rating rating={rating} />
        <Card.Text>{desc}</Card.Text>
        <div className="d-flex justify-content-center">
          <Card.Subtitle className="m-2 text-success fs-4 text-decoration-line-through text-muted">
            ${((price * discountPercentage) / 100 + price).toFixed(0)}
          </Card.Subtitle>
          <Card.Subtitle className="m-2 fs-4 text-success ">
            ${price}
          </Card.Subtitle>
        </div>
        <Button onClick={addToCart} variant="primary" className="mt-3">
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
