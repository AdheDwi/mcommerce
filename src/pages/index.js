import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

import HomeContainer from "../containers/homeContainer";

import { getProductAction } from "../actions/product";

const Home = () => {
  const cookies = new Cookies();
  const router = useRouter();
  useEffect(() => {
    const userId = cookies.get("userId");
    if (userId === undefined) {
      router.push("/login");
    }
  }, []);
  return (
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
};

Home.getInitialProps = async (ctx) => {
  ctx.store.dispatch(getProductAction());

  return {};
};

export default Home;
