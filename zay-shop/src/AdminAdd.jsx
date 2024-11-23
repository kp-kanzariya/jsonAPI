import React, { useEffect, useState } from "react";

function AdminAdd() {
  const [product1, setProduct1] = useState([]);
//   let id = 2;
//   useEffect(() => {
//     fetch(`http://localhost:5555/product/${id}`)
//       .then((response) => response.json())
//       .then((data) => setProduct1(data));
//   }, [id]);
  // State for each input field
  const [img, setMainImg] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [sp, setSpecialization] = useState("");
  const [price, setPrice] = useState("");
  const [colors, setColor] = useState("");
  const [cmt, setComments] = useState("");
  const [cnt, setQuantity] = useState("");
  const [rating, setRating] = useState("");

//   useEffect(() => {
//     if (
//       product1.img ||
//       product1.img1 ||
//       product1.img2 ||
//       product1.img3 ||
//       product1.img4 ||
//       product1.img5 ||
//       product1.title ||
//       product1.desc ||
//       product1.brand ||
//       product1.colors ||
//       product1.cmt ||
//       product1.price ||
//       product1.sp ||
//       product1.cnt ||
//       product1.rating
//     ) {
//       setMainImg(product1.img);
//       setImg1(product1.img1);
//       setImg2(product1.img2);
//       setImg3(product1.img3);
//       setImg4(product1.img4);
//       setImg5(product1.img5);
//       setTitle(product1.title);
//       setDescription(product1.desc);
//       setBrand(product1.brand);
//       setColor(product1.colors);
//       setComments(product1.cmt);
//       setPrice(product1.price);
//       setSpecialization(product1.sp);
//       setQuantity(product1.cnt);
//       setRating(product1.rating);
//     }
//   }, [product1]);

  // Handle form submission (example)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      img,
      img1,
      img2,
      img3,
      img4,
      img5,
      title,
      desc,
      brand,
      sp,
      cnt,
      price,
      rating,
      colors,
      cmt,
    };
    fetch(`http://localhost:5555/product`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => {
      alert("User updated successfully!");
      // navigate("/");
    });
    console.log(formData);
    // Handle form submission logic here (e.g., send to API)
  };
  console.log(product1);
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">New Product Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Images Section */}
        <div className="mb-3">
          <label htmlFor="mainImg" className="form-label">
            Main Image
          </label>
          <input
            type="text"
            // placeholder={product1.img}
            className="form-control"
            id="mainImg"
            onChange={(e) => setMainImg(e.target.value)}
            value={img}
          />
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="img1" className="form-label">
              Image 1
            </label>
            <input
              type="text"
              // placeholder={product1.img1}
              className="form-control"
              id="img1"
              value={img1}
              onChange={(e) => setImg1(e.target.value)}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="img2" className="form-label">
              Image 2
            </label>
            <input
              type="text"
              // placeholder={product1.img2}
              className="form-control"
              id="img2" 
              value={img2}
              onChange={(e) => setImg2(e.target.value)}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="img3" className="form-label">
              Image 3
            </label>
            <input
              type="text"
              // placeholder={product1.img3}
              className="form-control"
              id="img3"
              value={img3}
              onChange={(e) => setImg3(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="img4" className="form-label">
              Image 4
            </label>
            <input
              type="text"
              // placeholder={product1.img4}
              className="form-control"
              id="img4"
              value={img4}
              onChange={(e) => setImg4(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="img5" className="form-label">
              Image 5
            </label>
            <input
              type="text"
              // placeholder={product1.img5}
              className="form-control"
              id="img5"
              value={img5}
              onChange={(e) => setImg5(e.target.value)}
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            // placeholder={product1.title}
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            // placeholder={product1.desc}
            rows="4"
            value={desc}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="brand" className="form-label">
              Brand
            </label>
            <input
              type="text"
              className="form-control"
              // placeholder={product1.brand}
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="specialization" className="form-label">
              Specialization
            </label>
            <input
              type="text"
              className="form-control"
              id="specialization"
              // placeholder={product1.sp}
              value={sp}
              onChange={(e) => setSpecialization(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              // placeholder={product1.price}
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="rating" className="form-label">
              Rating
            </label>
            <input
              type="number"
              className="form-control"
              // placeholder={product1.rating}
              id="rating"
              min="0"
              max="5"
              step="0.1"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="color" className="form-label">
              Color
            </label>
            <input
              type="text"
              className="form-control"
              // placeholder={product1.colors}
              id="color"
              value={colors}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              // placeholder={product1.cnt}
              id="quantity"
              value={cnt}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="comments" className="form-label">
            Comments
          </label>
          <input
            className="form-control"
            id="comments"
            // placeholder={product1.cmt}
            value={cmt}
            onChange={(e) => setComments(e.target.value)}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary my-2 p-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminAdd;
