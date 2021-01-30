import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { Link } from "../routes";

const DetailContainer = (props) => {
  const router = useRouter();

  const [loved, setLoved] = useState(0);

  useEffect(() => {
    setLoved(props.detailProduct.loved);
  }, [props.detailProduct]);

  const addWislist = (e, number) => {
    e.preventDefault();
    const setNumber = number === 0 ? 1 : 0;
    setLoved(setNumber);
  };

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
  return (
    <div className="full-page-wrapper pt-3">
      <div className="detail-product-image">
        <div className="abolute-wrapp">
          <a href="javascript:void(0)" onClick={() => router.back()}>
            <i className={`fa fa-arrow-left`} />
          </a>

          <a href="#">
            <i className={`fa fa-share-alt`} />
          </a>
        </div>
        <img
          src={props.detailProduct.imageUrl}
          alt={`image-${props.detailProduct.title}`}
        />
      </div>
      <div className="detail-product-desc">
        <div className="detail-product-title">
          <h2>{props.detailProduct.title}</h2>

          <a href="#" onClick={(e) => addWislist(e, loved)}>
            <i className={`fa fa-${loved > 0 ? "heart" : "heart-o"}`} />
          </a>
        </div>
        <p>{props.detailProduct.description}</p>
      </div>
      <div className="detail-product-action">
        <p>{props.detailProduct.price}</p>
        <button className="btn button-primary">Buy</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  detailProduct: state.product.detailProduct,
});

export default connect(mapStateToProps)(DetailContainer);
