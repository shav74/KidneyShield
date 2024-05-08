import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/input-area.png";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    listingName: "",
    age: "",
    gender: "",
    description: "",
    image: "",
    bloodType: "",
    bodyWeight: "",
    height: "",
    specialConditions: "",
    urgency: "",
    compatibility: "",
    contact: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Listing Added") : alert("Failed");
        });
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Listing Title</p>
        <input
          value={productDetails.listingName}
          onChange={changeHandler}
          type="text"
          name="listingName"
          placeholder="Title"
        />
      </div>
      <div className="addproduct-itemfield">
        <p>Name</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Name"
        />
      </div>
      <div className="addproduct-itemfield">
        <p>Age</p>
        <input
          value={productDetails.age}
          onChange={changeHandler}
          type="number"
          name="age"
          placeholder="Age"
        />
      </div>
      <div className="addproduct-itemfield">
        <p>Select Gender</p>
        <select
          value={productDetails.gender}
          onChange={changeHandler}
          name="gender"
          className="add-product-selector"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <p>Description</p>
        <textarea
          value={productDetails.description}
          onChange={changeHandler}
          name="description"
          placeholder="Write Description"
        ></textarea>
      </div>
      <div className="addproduct-itemfield">
        <p>Add Image</p>
        <label htmlFor="file-input">
          <img
            className="addproduct-thumbnail-img"
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <div className="addproduct-itemfield">
        <p>Blood Type</p>
        <input
          value={productDetails.bloodType}
          onChange={changeHandler}
          type="text"
          name="bloodType"
          placeholder="Blood Type"
        />
      </div>
      <div className="addproduct-itemfield">
        <p>Body Weight</p>
        <input
          value={productDetails.bodyWeight}
          onChange={changeHandler}
          type="number"
          name="bodyWeight"
          placeholder="Body Weight"
        />
      </div>
      <div className="addproduct-itemfield">
        <p>Height</p>
        <input
          value={productDetails.height}
          onChange={changeHandler}
          type="number"
          name="height"
          placeholder="Height"
        />
      </div>
      <div className="addproduct-itemfield">
        <p>Special Conditions</p>
        <input
          value={productDetails.specialConditions}
          onChange={changeHandler}
          type="text"
          name="specialConditions"
          placeholder="Special Conditions"
        />
      </div>
      <div className="addproduct-itemfield">
        <p>Select Urgency</p>
        <select
          value={productDetails.urgency}
          onChange={changeHandler}
          name="urgency"
          className="add-product-selector"
        >
          <option value="modarate">Modarate</option>
          <option value="high">High Priority</option>
          <option value="critical">Critical</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <p>Compatibility</p>
        <input
          value={productDetails.compatibility}
          onChange={changeHandler}
          type="text"
          name="compatibility"
          placeholder="Compatibility"
        />
      </div>
      <div className="addproduct-itemfield">
        <p>Contact</p>
        <input
          value={productDetails.contact}
          onChange={changeHandler}
          type="text"
          name="contact"
          placeholder="Contact"
        />
      </div>

      <button
        onClick={() => {
          Add_Product();
        }}
        className="addproduct-btn"
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
