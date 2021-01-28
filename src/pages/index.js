import React, { Fragment } from "react";
import Head from "next/head";
import LoginContainer from "../containers/loginContainer";
import { getUser } from "../actions/other";

const Home = () => (
  <Fragment>
    <Head>
      <title>Home | Next.js</title>
    </Head>
    <LoginContainer />
  </Fragment>
);

Home.getInitialProps = async (ctx) => {
  // console.log(ctx.store);
  ctx.store.dispatch(getUser());

  return {};
};

export default Home;
