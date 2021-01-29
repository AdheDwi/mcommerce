import React, { Fragment } from "react";
import Head from "next/head";
import LoginContainer from "../containers/loginContainer";
import HomeContainer from "../containers/homeContainer";

import { getProductAction } from "../actions/product";

const Home = () => (
  <Fragment>
    <Head>
      <title>Home | Next.js</title>
    </Head>
    <HomeContainer />
  </Fragment>
);

Home.getInitialProps = async (ctx) => {
  // console.log(ctx.store);
  ctx.store.dispatch(getProductAction());

  return {};
};

export default Home;
