import React from 'react'
import { Button, Card } from 'react-bootstrap'


const CardProduct = (props) => {

  const { image, title, desc, price } = props;

  const addToCart = () => { alert(`Added ${title} to cart`) }

  return (
    <Card className="text-center">
              <Card.Body>
                <Card.Img variant="top" src={`img/${image}`} />
                <Card.Title className="mt-4">{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Card.Subtitle>${price}</Card.Subtitle>
                <Button onClick={addToCart} variant="primary" className="mt-3">Add to cart</Button>
              </Card.Body>
            </Card>
  )
}

export default CardProduct