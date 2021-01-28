import React, { Fragment } from 'react';
import Head from 'next/head';
import HomeContainer from '../containers/home';
import { getUser } from '../actions/other';

const Home = () => (
  <Fragment>
    <Head>
      <title>Home | Next.js</title>
    </Head>
    <HomeContainer />
  </Fragment>
);

Home.getInitialProps = async ctx => {
  // console.log(ctx.store);
  ctx.store.dispatch(getUser());

  return {};
};

export default Home;
