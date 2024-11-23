// import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import AdminSide from './AdminSide';
// import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userID } from "./App";
function Login() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [foundUserId, setFoundUserId] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  // const uID = useContext(userID)
  const { sharedID, setSharedID } = useContext(userID);
  useEffect(() => {
    fetch("http://localhost:4444/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  const user1 = [{ email: "admin1234@gmail.com", password: "admin1234" }];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const usera = user1.find(
      (user) => user.email === email && user.password === password
    );
    const user = users.find((user) => user.email === email);
    if (user) {
      setFoundUserId(user.id); 
    } else if (usera) {
      setSuccess("Login successful");
      let c = confirm('You want  to login as ADMIN?');
      if (c) {
        setSharedID({id:"admin"})
        navigate("/admin"); 
      }

    } else {
      alert("User Not Found || SignUp First");
      setFoundUserId(null); 
      navigate("/usersign");
    }

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

   
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  // console.log(users && users)
  console.log(sharedID);

  return (
    <div className="container mt-5 p-4 rounded mb-3">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {foundUserId && (
          <div className="alert alert-success mt-3">
            User ID : {foundUserId}
            <Link to={'/'}
              className="btn btn-primary btn-block"
              onClick={() =>
                setSharedID({ id: foundUserId })
              }
            >
              Update
            </Link>
            {/* {setSharedID({"id":"123"})} */}
            {/* {navigate('/')} */}
          </div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

export function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [pic, setPic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const newUser = { email, name, phone, address, bio,pic, password };
    fetch("http://localhost:4444/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then(() => {
      alert("User SignUp successfully!");
      navigate("/userlog");
    });

    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setSuccess("Signup successful. You can now login.");
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="container mt-5 p-4 rounded mb-3">
      <h2 className="text-center mb-4">Signup</h2>
      <form onSubmit={handleSubmit} className="row">
        <div className=" col-md-4 mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 col-md-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 col-md-4">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 col-md-6 ">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">
            Bio
          </label>
          <input
            type="text"
            className="form-control"
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pic" className="form-label">
            Pic
          </label>
          <input
            type="text"
            className="form-control"
            id="pic"
            value={pic}
            onChange={(e) => setPic(e.target.value)}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <button type="submit" className="btn btn-primary w-25">
          Signup
        </button>
      </form>
    </div>
  );
}

// function LoginSignup() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const nav=useNavigate()

//   const users = [{ email: 'admin1234@gmail.com', password: 'admin1234' }];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!email || !password) {
//       setError('All fields are required');
//       return;
//     }

//     if (!validateEmail(email)) {
//       setError('Please enter a valid email');
//       return;
//     }

//     if (!isLogin && password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     if (isLogin) {
//       const user = users.find((user) => user.email === email && user.password === password);
//       console.log(user) //email and pass of user who can login
//       if (user) {
//         setSuccess('Login successful');

//       } else {
//         setError('Invalid email or password');
//       }
//     } else {
//       setSuccess('Signup successful. You can now login.');
//     }
//   };

//   const validateEmail = (email) => {
//     return /\S+@\S+\.\S+/.test(email);
//   };

//   return (
//     <div className="container mt-5 p-4 rounded " style={{backgroundColor:"#66be48"}}>
//       <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Signup'}</h2>
//       <form onSubmit={handleSubmit}>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         {!isLogin && (
//           <div className="mb-3">
//             <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>
//         )}

//         {error && <div className="alert alert-danger">{error}</div>}
//         {success && nav('/admin') }

//         <button type="submit" className="btn btn-primary btn-block">
//           {isLogin ? 'Login' : 'Signup'}
//         </button>

//       </form>

//       <div className="text-center mt-3">
//         {isLogin ? (
//           <p>
//             Don't have an account?{' '}
//             <button className="btn btn-link" onClick={() => setIsLogin(false)}>
//               Signup here
//             </button>
//           </p>
//         ) : (
//           <p>
//             Already have an account?{' '}
//             <button className="btn btn-link" onClick={() => setIsLogin(true)}>
//               Login here
//             </button>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default LoginSignup;
