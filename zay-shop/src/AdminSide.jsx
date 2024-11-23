import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import ProductForm from "./AdminEdits";

function AdminSide() {
  // const { pId } = useParams();
  const [product1, setProduct1] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5555/product`)
      .then((response) => response.json())
      .then((data) => setProduct1(data));
  }, []);
  const removeProduct = (id) => {
    
    const updatedProducts = product1.filter((p) => p.id !== id);
    setProduct1(updatedProducts);

    fetch(`http://localhost:5555/product/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete product");
        }
        alert("Product removed successfully!");
      })
      .catch((error) => {
        console.error("Error removing product:", error);
        alert("Failed to remove product.");
      });
  };

  // console.log(product1);
  return (
    <div>
      {/* <ProductForm/> */}
      <div>
        {/* <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <a
                  className="navbar-brand text-success logo h1 align-self-center"
                  href="#"
                >
                  Zay
                </a>
                <span className="fw-bold">Admin Panel</span>
              </a>

              <div className="d-flex align-items-center ms-auto">
                <button className="btn btn-light position-relative me-3">
                  <i className="fas fa-bell"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    3
                  </span>
                </button>

                <div className="dropdown me-3">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    id="userMenu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user-circle"></i> John Doe
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="userMenu"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>

                <button className="btn btn-danger">
                  <a href="/" className="text-decoration-none text-light">
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </a>
                </button>
              </div>
            </div>
          </nav>
        </header> */}
        <div className="content">
          <p className="bg-primary p-2 text-light">
            All Products List{" "}
            <Link to={"/add"}>
              <span className="text-light mx-3 bg-info  p-2 rounded">
                Add Items<i class="fa-solid fa-plus mx-1"></i>
              </span>
            </Link>
            <a
              href="/admin"
              className="text-light mx-3 bg-info p-2 rounded text-decoration-none"
            >
              Manage User
            </a>
          </p>
          {/* <li><img src={product.img1 } alt="" /></li> */}
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Products IMG</th>
                <th>Title</th>
                <th>Desc</th>
                <th>Brand</th>
                <th>Colors</th>
                <th>Specifiacation</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Comments</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {product1.map((prod) => (
                <tr key={prod.id}>
                  <td>
                    <img
                      src={prod.img}
                      className="product-img"
                      alt="Product Image"
                    />
                    <img
                      src={prod.img1}
                      className="product-img"
                      alt="Product Image"
                    />
                    <img
                      src={prod.img2}
                      className="product-img"
                      alt="Product Image"
                    />
                    <img
                      src={prod.img3}
                      className="product-img"
                      alt="Product Image"
                    />
                    <img
                      src={prod.img4}
                      className="product-img"
                      alt="Product Image"
                    />
                    <img
                      src={prod.img5}
                      className="product-img"
                      alt="Product Image"
                    />
                  </td>
                  <th>{prod.title}</th>
                  <th>{prod.desc}</th>
                  <th>{prod.brand}</th>
                  <th>{prod.colors}</th>
                  <th>{prod.sp}</th>
                  <th>{prod.cnt}</th>
                  <th>{prod.price}</th>
                  <th>{prod.rating}</th>
                  <th>{prod.cmt}</th>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeProduct(prod.id)}
                    >
                      <i className="fas fa-times" />
                    </button>
                    <span>
                      <Link to={"/edit/" + prod.id}>
                        <button className="btn btn-sm btn-outline-success">
                          <i class="fa-solid fa-pen"></i>
                          {/* <i class="fa-solid fa-check"></i> */}
                        </button>
                      </Link>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default AdminSide;
