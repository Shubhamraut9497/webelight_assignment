import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const NewProducts = ({ newProduct }) => {
  const navigate = useNavigate();

  return (
    <>
      <h2 style={{textAlign:"center"}}>New Products</h2>
      <div className="row">
        {newProduct && newProduct.map((product) => (
          <div className="col-md-3 mb-4" key={product._id + 10}>
            <Card style={{ width: "18rem" }} className="h-100 text-center p-4">
              <Card.Img
                variant="top"
                src={product.thumbnail}
                alt={product.title}
                height={250}
              />
              <Card.Body>
                <Card.Title className="mb-0">
                  {product.title.substring(0, 12)}...
                </Card.Title>
                <Card.Text className="lead fw-bold">
                  $ {product.price}
                </Card.Text>
                <Button
                  className="btn btn-outline-dark"
                  onClick={() => navigate(`/products/${product._id}`)}
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewProducts;
