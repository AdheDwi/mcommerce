import React, { Fragment } from "react";
import Head from "next/head";
import LoginContainer from "../containers/loginContainer";
import HomeContainer from "../containers/homeContainer";

import { getProductAction } from "../actions/product";

const Home = () => (
  <Fragment>
    <Head>
      <title>MiniCommerce</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content="MiniCommerce" />
      <meta name="description" content="MiniCommerce" />
      <meta name="keywords" content="MiniCommerce" />
    </Head>
    <HomeContainer />
  </Fragment>
);

Home.getInitialProps = async (ctx) => {
  ctx.store.dispatch(getProductAction());

  return {};
};

export default Home;
