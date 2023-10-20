import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Shopdetails = () => {
  const params = useParams();
  const [product, setProductDetail] = useState({});

  const getProductDatails = () => {
    return fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProductDetail(json));
  };

  useEffect(() => {
    getProductDatails();
  }, []);

  console.log(product);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Shopdetails;
