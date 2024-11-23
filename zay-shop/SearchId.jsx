import React, { useState, useEffect } from 'react';

function FindUserById() {
  const [users, setUsers] = useState([]);
  const [searchEmail, setSearchEmail] = useState(''); // Email to search for
  const [foundUserId, setFoundUserId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch JSON data (replace with your actual URL or local db.json path)
    fetch('http://localhost:4444/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data); // Set the fetched user data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Error fetching user data');
      });
  }, []);

  // Function to search for the user by email and return the id
  const findUserId = () => {
    const user = users.find((user) => user.email === searchEmail);
    if (user) {
      setFoundUserId(user.id); // Return the ID if found
      setError(''); // Clear any previous error
    } else {
      setError('User not found'); // Handle case where user isn't found
      setFoundUserId(null); // Reset found ID
    }
  };

  return (
    <div className="container mt-5">
      <h2>Find User by Email</h2>
      <div className="form-group">
        <label htmlFor="email">Enter Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mt-2" onClick={findUserId}>
        Search
      </button>

      {/* Show found user ID or error */}
      {foundUserId && (
        <div className="alert alert-success mt-3">
          User ID found: {foundUserId}
        </div>
      )}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
}

export default FindUserById;
