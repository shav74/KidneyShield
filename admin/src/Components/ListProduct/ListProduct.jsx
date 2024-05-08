import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/dlt-ico.png";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/waitlist")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  const remove_product = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/jason",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  return (
    <div className="list-product">
      <div className="listproduct-format-main">
        <p>Image</p>
        <p>Listing Title</p>
        <p>Name</p>
        <p>Contact</p>
        <p>Urgence</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="listproduct-format-main listproduct-format"
              >
                <img
                  src={product.image}
                  alt=""
                  className="listproduct-product-icon"
                />
                <p>{product.listingName}</p>
                <p>{product.name}LKR</p>
                <p>{product.contact}LKR</p>
                <p>{product.urgency}</p>
                <img
                  onClick={() => {
                    remove_product(product.id);
                  }}
                  className="listproduct-remove-icon"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
