import React, { Fragment } from "react";
import Head from "next/head";
import LoginContainer from "../containers/loginContainer";
import CartContainer from "../containers/cartContainer";

import { getProductWishlistAction } from "../actions/product";

const Cart = () => (
  <Fragment>
    <Head>
      <title>MiniCommerce - Cart</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content="MiniCommerce" />
      <meta name="description" content="MiniCommerce" />
      <meta name="keywords" content="MiniCommerce" />
    </Head>
    <CartContainer />
  </Fragment>
);

Cart.getInitialProps = async (ctx) => {
  ctx.store.dispatch(getProductWishlistAction());

  return {};
};

export default Cart;
