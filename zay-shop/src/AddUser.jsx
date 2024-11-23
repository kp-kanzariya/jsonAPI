import React, { useState, useEffect } from 'react';

const AddUserForm = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    productId: '',
    productImg: '',
    productName: '',
    productPrice: '',
    productQuantity: ''
  });

  // Fetch existing users from the API (db.json)
  useEffect(() => {
    fetch('http://localhost:4444/users'+ id)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission to add new user
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: id, // Unique user ID based on timestamp
      cart: [
        {
          productId: formData.productId,
          productImg: formData.productId,
          productName: formData.productName,
          productPrice: formData.productPrice,
          productQuantity: formData.productQuantity
        }
      ]
    };

    // Use Fetch to POST new user to db.json
    fetch('http://localhost:4444/users'+id , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User added:', data);
        setUsers([...users, data]); // Update state with new user
      })
      .catch((error) => console.error('Error adding user:', error));

    // Clear form fields after submission
    // setFormData({
    //   name: '',
    //   email: '',
    //   password: '',
    //   address: '',
    //   phone: '',
    //   productId: '',
    //   productName: '',
    //   productPrice: '',
    //   productQuantity: ''
    // });
  };

  return (
    <div>
      <h2>Add New User and Cart</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <h3>Add Cart Item</h3>
        <div>
          <label>Product ID:</label>
          <input
            type="text"
            name="productId"
            value={formData.productId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Product Price:</label>
          <input
            type="number"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="productQuantity"
            value={formData.productQuantity}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <button type="submit">Add User and Cart</button>
      </form>

      <h2>Existing Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.profile.address}
            <ul>
              {user.cart.map((item) => (
                <li key={item.productId}>
                  {item.name}: {item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddUserForm;
