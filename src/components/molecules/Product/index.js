import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./Product.scss";
import product from "json/data.json";

const Product = () => {
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    getData();
  });

  const getData = () => {
    axios
      .get("https://ocistok.com/pages/json-produk")
      .then((res) => {
        const data = res.data;
        if (checkJSON(data)) {
          setDataProducts(data.data);
        } else {
          setDataProducts(product.data);
        }
      })
      .catch(() => {
        alert("gagal load data");
      });
  };

  const checkJSON = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  return (
    <div className="product container">
      <div className="row justify-content-between align-items-center">
        {dataProducts.map((item, i) => {
          return (
            <div key={i} className="col-6 col-md-4 col-lg-2 mb-4 mr-md-3">
              <Card item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
