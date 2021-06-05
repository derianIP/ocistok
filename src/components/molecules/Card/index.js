import { Button } from "components/atoms";
import React from "react";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-body py-3">
        <figure className="figure m-0">
          <img
            src={item.gambar}
            className="figure-img img-fluid"
            alt="product"
          />
          <figcaption className="figure-caption">
            ANAK-ANAK MANTEL ANAK JAKET MUSIM SEMI WANITA ...
          </figcaption>
          <Button
            className="btn"
            isPrimary
            isBlock
            style={{ fontSize: 12, color: "#fff" }}
          >
            ADD CART
          </Button>
        </figure>
      </div>
    </div>
  );
};

export default Card;
