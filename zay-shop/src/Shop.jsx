import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";

function Shop() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5555/product`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(product)
  return (
    <div>
      {/* <Header/> */}
      <div>
        {/* Start Content */}
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3">
              <h1 className="h2 pb-4">Categories</h1>
              <ul className="list-unstyled templatemo-accordion">
                <li className="pb-3">
                  <a
                    className="collapsed d-flex justify-content-between h3 text-decoration-none"
                    href="#"
                  >
                    Gender
                    <i className="fa fa-fw fa-chevron-circle-down mt-1" />
                  </a>
                  <ul className="collapse show list-unstyled pl-3">
                    <li>
                      <a className="text-decoration-none" href="#">
                        Men
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="#">
                        Women
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <li className="pb-3">
                  <a
                    className="collapsed d-flex justify-content-between h3 text-decoration-none"
                    href="#"
                  >
                    Sale
                    <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
                  </a>
                  <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                    <li>
                      <a className="text-decoration-none" href="#">
                        Sport
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="#">
                        Luxury
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="pb-3">
                  <a
                    className="collapsed d-flex justify-content-between h3 text-decoration-none"
                    href="#"
                  >
                    Product
                    <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
                  </a>
                  <ul
                    id="collapseThree"
                    className="collapse list-unstyled pl-3"
                  >
                    <li>
                      <a className="text-decoration-none" href="#">
                        Bag
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="#">
                        Sweather
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="#">
                        Sunglass
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-inline shop-top-menu pb-3 pt-1">
                    <li className="list-inline-item">
                      <a
                        className="h3 text-dark text-decoration-none mr-3"
                        href="#"
                      >
                        All
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="h3 text-dark text-decoration-none mr-3"
                        href="#"
                      >
                        Men's
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="h3 text-dark text-decoration-none" href="#">
                        Women's
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 pb-4">
                  <div className="d-flex">
                    <select className="form-control">
                      <option>Featured</option>
                      <option>A to Z</option>
                      <option>Item</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                {product.map((prod, i) => (
                  <div className="col-md-4" key={i}>
                    <div className="card mb-4 product-wap rounded-0">
                      <div className="card rounded-0">
                        <img
                          className="card-img rounded-0 img-fluid"
                          src={prod.img}
                        />
                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                          <ul className="list-unstyled">
                           
                            <li>
                              <Link
                                className="btn btn-success text-white mt-2"
                                to={`/product/${prod.id}`}
                              >
                                <i className="far fa-eye" />
                              </Link>
                            </li>
                            {/* <li>
                              <a
                                className="btn btn-success text-white mt-2"
                                href={`/product/${prod.id}`}
                              >
                                <i className="fas fa-cart-plus" />
                              </a>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="titlehead d-flex justify-content-between">
                          <Link
                            to={`/product/${prod.id}`}
                            className="h3 text-decoration-none"
                          >
                            {prod.title}
                          </Link>
                          <Link
                            to={`/product/${prod.id}`}
                            className="h3 text-decoration-none"
                          >
                            {prod.brand}
                          </Link>
                        </div>
                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                          <li>{prod.size}</li>
                          <li className="pt-2">
                            <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                            <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                            <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                            <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                            <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                          </li>
                        </ul>
                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                          <li>
                            <i className="text-warning fa fa-star" />
                            <i className="text-warning fa fa-star" />
                            <i className="text-warning fa fa-star" />
                            <i className="text-muted fa fa-star" />
                            <i className="text-muted fa fa-star" />
                          </li>
                        </ul>
                        <p className="text-center mb-0">{prod.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            
            </div>
          </div>
        </div>
        {/* End Content */}
        {/* Start Brands */}
        <section className="bg-light py-5">
          <div className="container my-4">
            <div className="row text-center py-3">
              <div className="col-lg-6 m-auto">
                <h1 className="h1">Our Brands</h1>
                <p>
                Benefits and plenty of surprises are waiting for you!
                Sign up now, sed do eiusmod Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="col-lg-9 m-auto tempaltemo-carousel">
                <div className="row d-flex flex-row">
                  {/*Controls*/}
                  <div className="col-1 align-self-center">
                    <a
                      className="h1"
                      href="#multi-item-example"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <i className="text-black fas fa-chevron-left" />
                    </a>
                  </div>
                  {/*End Controls*/}
                  {/*Carousel Wrapper*/}
                  <div className="col">
                    <div
                      className="carousel slide carousel-multi-item pt-2 pt-md-0"
                      id="multi-item-example"
                      data-bs-ride="carousel"
                    >
                      {/*Slides*/}
                      <div
                        className="carousel-inner product-links-wap"
                        role="listbox"
                      >
                        {/*First slide*/}
                        <div className="carousel-item active">
                          <div className="row">
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_01.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_02.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_03.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_04.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/*End First slide*/}
                        {/*Second slide*/}
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_01.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_02.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_03.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_04.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/*End Second slide*/}
                        {/*Third slide*/}
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_01.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_02.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_03.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_04.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/*End Third slide*/}
                      </div>
                      {/*End Slides*/}
                    </div>
                  </div>
                  {/*End Carousel Wrapper*/}
                  {/*Controls*/}
                  <div className="col-1 align-self-center">
                    <a
                      className="h1"
                      href="#multi-item-example"
                      role="button"
                      data-bs-slide="next"
                    >
                      <i className="text-black fas fa-chevron-right" />
                    </a>
                  </div>
                  {/*End Controls*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Brands*/}
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Shop;
