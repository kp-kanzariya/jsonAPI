import React, { useContext, useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userID } from "./App";

function Cart() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});
  const { sharedID } = useContext(userID);
  const id = sharedID.id;
  
  useEffect(() => {

    fetch(`http://localhost:4444/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);        
        setCart(data.cart || []);
      });
  }, [id]);
  
  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
  
    fetch(`http://localhost:4444/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user, cart: updatedCart }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCart(data.cart); 
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
      });
  };
  

  return (
    <Container>
      <h2 className="mt-4 mb-4">Shopping Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.map((item) => (
              <tr key={item.productId}>
                <td>{item.productName}</td>
                <td>
                  <img
                    src={item.productImg}
                    alt={item.productName}
                    width="50"
                  />
                </td>
                <td>${item.productPrice}</td>
                <td>{item.productQuantity}</td>
                <td>${item.productPrice * item.productQuantity}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeItem(item.productId)} // Remove item from cart
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Link to={"/payform"} className="btn btn-primary mt-3">
        Proceed to Checkout
      </Link>
    </Container>
  );
}

export default Cart;
