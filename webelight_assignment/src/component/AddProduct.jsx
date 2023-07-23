import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  let userData = {
    title: "",
    description: "",
    category: "",
    brand: "",
    discount_percentage: "",
    price: "",
    rating: "",
    stock: "",
    thumbnail: "",
  };
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [data, setData] = useState(userData);

  const handleChange = (e) => {
    const input = e.target.name;
    const value = e.target.value;
    setData((curr) => {
      return {
        ...curr,
        [input]: value,
      };
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/addProduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Successfully Created ");
        navigate("/");
      } else {
        toast.error("Failed to add product");
      }
    } catch (error) {
      toast.error("An error occurred while adding the product");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-90">
        <Form className="mt-3 py-5 text-center col-lg-4 col-md-6 col-sm-8 m-3 ">
          <h1>Add new Product </h1>
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              name="title"
              type="text"
              placeholder="Title"
              className="w-100 mt-3"
              value={data.title}
              onChange={handleChange}
            />
            <Form.Control
              name="description"
              type="text"
              placeholder="Description"
              className="w-100 mt-3"
              value={data.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Control
              name="category"
              type="text"
              placeholder="Category"
              className="w-100 mt-3"
              value={data.category}
              onChange={handleChange}
            />
            <Form.Control
              name="brand"
              type="text"
              placeholder="Brand"
              className="w-100 mt-3"
              value={data.brand}
              onChange={handleChange}
            />
            <Form.Control
              name="discount_percentage"
              type="text"
              placeholder="Discount Percentage"
              className="w-100 mt-3"
              value={data.discount_percentage}
              onChange={handleChange}
            />
            <Form.Control
              name="price"
              type="text"
              placeholder="Price"
              className="w-100 mt-3"
              value={data.price}
              onChange={handleChange}
            />
            <Form.Control
              name="rating"
              type="text"
              placeholder="Rating"
              className="w-100 mt-3"
              value={data.rating}
              onChange={handleChange}
            />
            <Form.Control
              name="stock"
              type="text"
              placeholder="Stock"
              className="w-100 mt-3"
              value={data.stock}
              onChange={handleChange}
            />
            <Form.Control
              name="thumbnail"
              type="text" // Changed from "file" to "text"
              placeholder="Paste Image URL Here" // Placeholder for the image URL
              className="w-100 mt-3 custom-file-input"
              value={data.thumbnail} // Use the thumbnail field from the data state
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" className="w-100 mt-3" onClick={submitForm}>
            Click Here To Add
          </Button>
          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </div>
    </div>
  );
}

export default AddProduct;
