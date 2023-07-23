import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IncrementItem, decrementItem, deleteItem } from './Reducer/UserSlice';
import {deleteItem2,IncrementItem2 ,decrementItem2 } from './Reducer/UserSlice2'
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.user);
  console.log(data);
  const newProductData = useSelector((state) => state.newItem);

  const handleRemoveItem = (item) => {
    dispatch(deleteItem(item.id));
  };
  const handleRemoveItem2 = (item) => {
    dispatch(deleteItem2(item.id));
  };

  const handleIncrease = (id) => {
    dispatch(IncrementItem(id));
  };
  const handleIncrease2 = (id) => {
    dispatch(IncrementItem2(id));
  };

  const handleDecrease = (id) => {
    dispatch(decrementItem(id));
  };
  const handleDecrease2 = (id) => {
    dispatch(decrementItem2(id));
  };

  // Calculate total price
  const totalPrice = data.cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);
  const totalPrice2 = newProductData.cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);


  return (
    <>
      {data.cart.length > 0 ? (
        // Show data.cart if available
        data.cart.map((item) => (
          <div key={item.id}>
            <div className="d-flex justify-content-between align-items-center m-3 text-center shadow-lg p-3 mb-4 bg-primary rounded text-white">
              <div>
                <Image
                  src={item.images[0] || item.thumbnail}
                  placeholder={item.title}
                  width={60}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 className="w-25">{item.title}</h4>
              <div className="col-lg-1 d-flex align-items-center w-5">
                <button
                  className="border border-primary rounded w-25"
                  onClick={() => handleDecrease(item.id)}
                >
                  -
                </button>
                <span className="m-2">{item.quantity}</span>
                <button
                  className="border border-primary rounded w-25"
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </button>
              </div>
              <h3 className="align-self-center">
                $ {(item.quantity * item.price).toFixed(2)}
              </h3>
              <button
                className="btn btn-warning h-25"
                onClick={() => handleRemoveItem(item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        // Show newProductData.cart if data.cart is empty or not available
        newProductData.cart.map((item) => (
          <div key={item.id}>
            <div className="d-flex justify-content-between align-items-center m-3 text-center shadow-lg p-3 mb-4 bg-primary rounded text-white">
              <div>
                <Image
                  src={item.thumbnail}
                  placeholder={item.title}
                  width={60}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 className="w-25">{item.title}</h4>
              <div className="col-lg-1 d-flex align-items-center w-5">
                <button
                  className="border border-primary rounded w-25"
                  onClick={() => handleDecrease2(item.id)}
                >
                  -
                </button>
                <span className="m-2">{item.quantity}</span>
                <button
                  className="border border-primary rounded w-25"
                  onClick={() => handleIncrease2(item.id)}
                >
                  +
                </button>
              </div>
              <h3 className="align-self-center">
                $ {(item.quantity * item.price).toFixed(2)}
              </h3>
              <button
                className="btn btn-warning h-25"
                onClick={() => handleRemoveItem2(item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
  
      <hr />
      <div className="d-flex justify-content-between m-3">
        <button className="btn btn-outline-dark h-25 mt-3 m-3" onClick={() => navigate("/")}>
          <FaLessThan /> Continue Shopping
        </button>
        <h3 className="mt-3">Total Price: ${data ? totalPrice.toFixed(2) : totalPrice2.toFixed(2)}</h3>
        <button
          className="btn btn-outline-dark h-25 mt-3 m-3"
          onClick={() => navigate("/payment", { state: { data: totalPrice.toFixed(2) } })}
        >
          Payment
        </button>
      </div>
    </>
  );
  
}

export default Cart;
