import React, { useState } from "react";
import "./AddArticle.css";
import upload_area from "../../assets/input-area.png";

const AddArticle = () => {
  const [image, setImage] = useState(false);
  const [articleDetails, setArticleDetails] = useState({
    title: "",
    content: "",
    image: "",
    summary: "",
    category: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setArticleDetails({ ...articleDetails, [e.target.name]: e.target.value });
  };

  const Add_Article = async () => {
    console.log(articleDetails);
    let responseData;
    let article = articleDetails;

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
      article.image = responseData.image_url;
      console.log(article);
      await fetch("http://localhost:4000/addArticle", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(article),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Article Added") : alert("Failed");
        });
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Title</p>
        <input
          value={articleDetails.title}
          onChange={changeHandler}
          type="text"
          name="title"
          placeholder="Enter Titile"
        />
      </div>

      <div className="addproduct-itemfield">
        <p>Select Category</p>
        <select
          value={articleDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-selector"
        >
          <option disabled value="">
            Select an option
          </option>
          <option value="health">Kidney Health</option>
          <option value="news">News</option>
          <option value="latest">Latest</option>
          <option value="events">Events</option>
        </select>
      </div>

      <div className="addproduct-itemfield">
        <p>Content</p>
        <textarea
          value={articleDetails.content}
          onChange={changeHandler}
          name="content"
          placeholder="Write Article Content Here"
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
        <p>Summary</p>
        <input
          value={articleDetails.summary}
          onChange={changeHandler}
          type="text"
          name="summary"
          placeholder="Enter Article Summary"
        />
      </div>

      <button
        onClick={() => {
          Add_Article();
        }}
        className="addproduct-btn"
      >
        Add Article
      </button>
    </div>
  );
};

export default AddArticle;
