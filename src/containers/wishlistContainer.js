import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  Card,
  Button,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import { Link } from "../routes";

const WishlistContainer = (props) => {
  const [loved, setLoved] = useState([]);

  useEffect(() => {
    if (props.dataProduct.productPromo.length > 0) {
      const getLoved = props.dataProduct.productPromo.map(
        (product) => product.loved
      );
      setLoved(getLoved);
    }
  }, [props.dataProduct.productPromo.length]);

  const addWislist = (e, id, number) => {
    e.preventDefault();
    const productLoved = [...loved];
    productLoved[id] = number === 0 ? 1 : 0;
    setLoved(productLoved);
    console.log("jos");
  };

  console.log(loved);
  // const setLogin = () => {
  //   if (email.length < 1) {
  //     setEmailErr("Email tidak boleh kosong");
  //   }
  //   if (password.length < 1) {
  //     setPasswordErr("Password tidak boleh kosong");
  //   }
  //   if (email.length > 0 && password.length > 0) {
  //     setEmailErr("");
  //     setPasswordErr("");
  //     console.log({ email, password });
  //   }
  // };

  // const responseFacebook = (response) => {
  //   console.log(response);
  // };

  // const responseGoogle = (response) => {
  //   console.log(response);
  // };

  return (
    <div className="full-page-wrapper">
      <div className="header-wrapper d-flex align-items-center">
        <Link route="/">
          <a>
            <i className={`fa fa-arrow-left`} />
          </a>
        </Link>
        <h1>Detail Product</h1>
      </div>
      <div className="product-list-wrapper">
        <div className="card-product d-flex align-item-start">
          <div className="image-wrapper">
            <Link route="/">
              <img src="{product.imageUrl}" alt="{product.title}" />
            </Link>
          </div>
          <div className="text-wrapper">
            <div className="detail-product-title mb-0">
              <Link route="/">
                <h2>Apa</h2>
              </Link>
              {/* <a onClick={(e) => addWislist(e, i, loved[i])}>
                <i className={`fa fa-${loved[i] > 0 ? "heart" : "heart-o"}`} />
              </a> */}
              <a href="#">
                <i className={`fa fa-heart-o`} />
              </a>
            </div>
            <p>$100</p>
          </div>
        </div>
      </div>
      <div className="menu-list">
        <Link route="/">
          <a className="menu active">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span>Home</span>
          </a>
        </Link>
        <Link route="/">
          <a className="menu">
            <i className="fa fa-heart" aria-hidden="true"></i>
            <span>Wishlist</span>
          </a>
        </Link>
        <Link route="/">
          <a className="menu">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span>Cart</span>
          </a>
        </Link>
        <Link route="/">
          <a className="menu">
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            <span>Logout</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataProduct: state.product.dataProduct,
});

export default connect(mapStateToProps)(WishlistContainer);
