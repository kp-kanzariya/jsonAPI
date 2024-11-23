import React, { useContext, useEffect, useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import {userID} from './App'

function UserProfile() {
  const [user, setUser] = useState([]);
  const { sharedID, setSharedID } = useContext(userID);

  let id=sharedID.id
 

  useEffect(() => {
    fetch(`http://localhost:4444/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);
  // Dummy user data
  // const user = {
  //   profilePicture: "https://via.placeholder.com/150", // Placeholder for profile image
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  //   address: "San Francisco, CA",
  //   bio: "I am a front-end developer with a passion for building responsive and interactive websites. I love learning new technologies and improving my skills.",
  //   joined: "January 2021",
  // };
console.log(user.id)
console.log(user.img)
  return (
    <Container className="mt-5">
      <Card className="shadow-lg p-3 mb-5 bg-white rounded">
        <Row>
          <Col md={4} className="text-center">
            <img
              src={user.pic}
              alt="Profile"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "150px", height: "150px", border: "5px solid #4CAF50" }}
            />
            <h4>{user.name}</h4>
            <p className="text-muted">{user.address}</p>
          </Col>
          <Col md={8}>
            <Card.Body>
              <h5 className="mb-3 bg-info p-2 rounded">User Information</h5>
              <p>
                <strong>Id: </strong> {user.id}
              </p>
              <p>
                <strong>Email: </strong> {user.email}
              </p>
              <p>
                <strong>Phone: </strong> {user.phone}
              </p>
              <p>
                <strong>address: </strong> {user.address}
              </p>
              <p>
                <strong>Bio: </strong> {user.bio}
              </p>
                
             
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default UserProfile;
