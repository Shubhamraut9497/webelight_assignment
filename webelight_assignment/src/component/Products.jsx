import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import NewProducts from "./NewProducts";

function Products() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newProduct,setNewProduct]=useState([]);

  const apiUrl=process.env.REACT_APP_API_URL;
  useEffect(() => {
    let componentMounted = true;
  
    // Function to fetch product data from the API
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products`);
      if (componentMounted) {
        const data = await response.clone().json();
        setData(data);
        setFilter(data);
        setLoading(false);
      }
    };
  
    // Function to fetch additional data from the new API
    const getNewProducts = async () => {
      setLoading(true);
      const response = await fetch(`${apiUrl}/getData`);
      if (componentMounted) {
        const newData = await response.clone().json();
        setNewProduct(newData);
        setLoading(false);
      }
    };
  
    getProducts();
    getNewProducts();
  
    return () => {
      componentMounted = false;
    };
  }, []);

 

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (categ) => {
    const updatedList = data.products?.filter((val) => val.category === categ);
    setFilter({ products: updatedList });
  };
  
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("smartphones")}
          >
            smartphones
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("laptops")}
          >
            laptops
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("fragrances")}
          >
            fragrances
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("skincare")}
          >
            skincare
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("groceries")}
          >
            groceries
          </div>
        </div>
        {filter.products &&
          filter.products.map((product) => {
            return (
              <>
                <div className="col-md-3 mb-4" key={product.id+10}>
                  <Card
                    style={{ width: "18rem" }}
                    className="h-100 text-center p-4"
                    key={product.id}
                  >
                    <Card.Img
                      variant="top"
                      src={product.images[0]}
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
                        onClick={() => navigate(`/products/${product.id}`)}
                        style={{ color: "white", fontWeight: "bold" }}
                      >
                        Buy Now
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </>
            );
          })}<NewProducts newProduct={newProduct}/>
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bold text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;
