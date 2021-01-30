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

  return (
    <div className="full-page-wrapper pt-3">
      <div className="detail-product-image">
        <div className="abolute-wrapp">
          <Link route="/">
            <a>
              <i className={`fa fa-arrow-left`} />
            </a>
          </Link>

          <a href="#">
            <i className={`fa fa-share-alt`} />
          </a>
        </div>
        <img />
      </div>
      <div className="detail-product-desc">
        <div className="detail-product-title">
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
        <p>hahahahahahahaahhahahahah</p>
      </div>
      <div className="detail-product-action">
        <p>600</p>
        <button className="btn button-primary">Buy</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataProduct: state.product.dataProduct,
});

export default connect(mapStateToProps)(HomeContainer);
