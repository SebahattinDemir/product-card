import React from "react";
import { Card } from "react-bootstrap";

const Rating = (props) => {
  const { rating } = props;
  return (
    <Card.Subtitle className="mb-2 text-muted">
      {rating >= 4.5 ? (
        <span>⭐⭐⭐⭐⭐</span>
      ) : rating >= 3.5 ? (
        <span>⭐⭐⭐⭐</span>
      ) : rating >= 2.5 ? (
        <span>⭐⭐⭐</span>
      ) : rating >= 1.5 ? (
        <span>⭐⭐</span>
      ) : (
        <span>⭐</span>
      )}
    </Card.Subtitle>
  );
};

export default Rating;
