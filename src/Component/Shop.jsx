import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Spinner } from "react-bootstrap";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = () => {
    setLoading(true);
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setProducts(json);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <Spinner animation="border" />;
  }

  console.log("products are", products);
  return (
    <Container>
      <Row>
        {products?.map((pro) => {
          return (
            <>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={pro.image} />
                <Card.Body>
                  <Card.Title>{pro.title}</Card.Title>
                  <Card.Text>{pro.description}</Card.Text>
                </Card.Body>

                <Card.Body>
                  <Link to={`/shop/${pro.id}`}>Show Details</Link>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </Row>
    </Container>
  );
};

export default Shop;
