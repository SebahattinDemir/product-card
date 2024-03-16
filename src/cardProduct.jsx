import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CardProduct = () => {

  const cardStyle = {
    width: "100%",
    height: "100%",
    border: "1px solid black",
    borderRadius: "10px",
    margin: "25px",
    boxShadow: "10px 10px 5px lightgray",
    backgroundColor: "whitesmoke",
    padding: "15px",
    
  }

  return (
    <Card style={cardStyle}>
    <Card.Img variant="top" src="../img/product1.jpg" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default CardProduct