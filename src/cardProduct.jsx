import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './rating';


const CardProduct = (props) => {

  const { image, title, desc, price,rating } = props;

  const addToCart = () => { alert(`Added ${title} to cart`) }

  return (
    <Card className="text-center">
              <Card.Body>
                <Card.Img variant="top" src={`img/${image}`} />
                <Card.Title className="mt-4">{title}</Card.Title>
                <Rating rating={rating} />
                <Card.Text>{desc}</Card.Text>
                <div>
                <Card.Subtitle>${price}</Card.Subtitle>
                <Card.Subtitle>${price}</Card.Subtitle>
                </div>
                <Button onClick={addToCart} variant="primary" className="mt-3">Add to cart</Button>
              </Card.Body>
            </Card>
  )
}

export default CardProduct