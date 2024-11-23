// CheckoutForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data or send to backend if needed
    navigate('/payment'); // Redirect to payment page
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="zip" className="form-label">Zip Code</label>
          <input
            type="text"
            className="form-control"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Proceed to Payment</button>
      </form>
    </div>
  );
}

export default CheckoutForm;


export function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const navigate = useNavigate();

  const handlePaymentSelect = (e) => {
      setPaymentMethod(e.target.value);
    //   console.log(e.target)
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      
    // Save payment method or send to backend if needed
    navigate('/confirm'); // Redirect to confirmation page
  };

  return (
    <div className="container mt-5">
      <h2>Payment Method</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="credit-card"
            name="paymentMethod"
            value="credit-card"
            checked={paymentMethod === 'credit-card'}
            onChange={handlePaymentSelect}
          />
          <label className="form-check-label" htmlFor="credit-card">
            Credit Card
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={handlePaymentSelect}
          />
          <label className="form-check-label" htmlFor="paypal">
            PayPal
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="cod"
            name="paymentMethod"
            value="cod"
            checked={paymentMethod === 'cod'}
            onChange={handlePaymentSelect}
          />
          <label className="form-check-label" htmlFor="cod">
            Cash On Delivery
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Proceed to Confirm Order</button>
      </form>
    </div>
  );
}



export function ConfirmOrderPage() {
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    // Normally, you'd send data to the backend for order confirmation
    alert('Order Confirmed! Invoice generated.');
    navigate('/'); // Redirect to homepage or some other page
  };

  return (
    <div className="container mt-5">
      <h2>Order Confirmation</h2>
      <div className="card p-3">
        <h4>Order Summary</h4>
        <p>Full Name: John Doe</p>
        <p>Address: 123 Main St, City</p>
        <p>Payment Method: Credit Card</p>
        <p>Total Price: $100</p>
      </div>
      <button className="btn btn-success mt-3" onClick={handleConfirmOrder}>
        Confirm Order and Generate Invoice
      </button>
    </div>
  );
}


