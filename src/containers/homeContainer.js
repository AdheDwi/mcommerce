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

const HomeContainer = (props) => {
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

  console.log("dataProduct", props.dataProduct);

  return (
    <div className="full-page-wrapper">
      <div className="header-wrapper">
        <FormGroup className="mb-0">
          <Input type="text" name="search" placeholder="Search..." />
        </FormGroup>
      </div>
      <div className="category-wrapper">
        <h1>Categories</h1>
        <div className="category-scroll">
          {props.dataProduct.category.map((item) => (
            <Link route="/">
              <div className="category" key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="product-wrapper">
        <h1>Product List</h1>
        {props.dataProduct.productPromo.map((product, i) => (
          <div className="card-product" key={product.id}>
            <Link route="/">
              <img src={product.imageUrl} alt={product.title} />
            </Link>
            <div className="product-desc">
              <Link route="/">
                <h2>{product.title}</h2>
              </Link>
              <a onClick={(e) => addWislist(e, i, loved[i])}>
                <i className={`fa fa-${loved[i] > 0 ? "heart" : "heart-o"}`} />
              </a>
            </div>
          </div>
        ))}
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

export default connect(mapStateToProps)(HomeContainer);
