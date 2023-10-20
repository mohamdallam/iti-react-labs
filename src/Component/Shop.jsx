import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

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

  //   return (
  //     <>
  //       <h4>Shop</h4>

  //       {products?.map((pro) => {
  //         return (
  //           <>
  //             <img src={pro.image} alt="" />
  //             <p>{pro.title}</p>
  //             <Link to={`/shop/${pro.id}`}>Show Details</Link>
  //           </>
  //         );
  //       })}
  //     </>
  //   );
};

export default Shop;
