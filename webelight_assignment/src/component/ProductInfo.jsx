import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addItem } from "../component/Reducer/UserSlice";
import { Toaster, toast } from "react-hot-toast";
import { addnewItem } from "./Reducer/UserSlice2";

function ProductInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [newProduct,setNewProduct]=useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    const getNewProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/products/${id}`);
        const data = await response.json();
        setNewProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching new product:", error);
        setLoading(false);
      }
    };

    if (isValidObjectId(id)) {
      getNewProduct();
    } else {
      getProduct();
    }
  }, [id]);

  const dataTransfer = (product) => {
    dispatch(addItem(product));
    toast.success("Added to Cart");
  };
  const dataTransfer2 = (product) => {
    dispatch(addnewItem(product));
    toast.success("Added to Cart");
  };
  const isValidObjectId = (id) => {
    const objectIdRegex = /^[0-9a-fA-F]{24}$/;
    return objectIdRegex.test(id);
  };
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: "6px" }} />
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        {product && product.images && (
          <>
            <div className="col-md-6" key={product.id+1}>
              <img
                src={product.images[0]}
                alt={product.title}
                height={400}
                width={400}
              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">
                {product.category}
              </h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead fw-bold">
                Rating {product.rating}
                <AiFillStar />
              </p>
              <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark me-2"
                onClick={() => dataTransfer(product)}
              >
                Add to cart
              </button>
              <button
                className="btn btn-dark me-2"
                onClick={() => navigate("/payment",{state:{data:product.price}})}
              >
                Buy Now
              </button>
            </div>
            <Toaster position="bottom-center" reverseOrder={false} />
          </>
        )}
      </>
    );
  };
  const ShowNewProduct = () => {
    return (
      <>
        {newProduct && newProduct.title && (
          <>
            <div className="col-md-6">
              <img
                src={ newProduct.thumbnail}
                alt={newProduct.title}
                height={400}
                width={400}
              />
            </div>
            <div className="col-md-6">
              {/* Display new product information */}
              <h4 className="text-uppercase text-black-50">{newProduct.category}</h4>
              <h1 className="display-5">{newProduct.title}</h1>
              <p className="lead fw-bold">
                Rating {newProduct.rating}
                <AiFillStar />
              </p>
              <h3 className="display-6 fw-bold my-4">$ {newProduct.price}</h3>
              <p className="lead">{newProduct.description}</p>
              <button
                className="btn btn-outline-dark me-2"
                onClick={() => dataTransfer2(newProduct)}
              >
                Add to cart
              </button>
              <button
                className="btn btn-dark me-2"
                onClick={() =>
                  navigate("/payment", { state: { data: newProduct.price } })
                }
              >
                Buy Now
              </button>
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? (
            <Loading />
          ) : isValidObjectId(id) ? (
            <ShowNewProduct />
          ) : (
            <ShowProduct />
          )}
        </div>
      </div>
    </div>
  );
  
}

export default ProductInfo;
