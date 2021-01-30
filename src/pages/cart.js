import React, { Fragment } from "react";
import Head from "next/head";

import CartContainer from "../containers/cartContainer";

const Cart = () => (
  <Fragment>
    <Head>
      <title>MiniCommerce - Cart</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content="MiniCommerce - Cart" />
      <meta name="description" content="MiniCommerce cart page" />
      <meta name="keywords" content="MiniCommerce, Cart" />
    </Head>
    <CartContainer />
  </Fragment>
);
export default Cart;
