import React, { Fragment } from "react";
import Head from "next/head";
import DetailContainer from "../containers/detailContainer";

import { getProductByIdAction } from "../actions/product";

const Detail = () => (
  <Fragment>
    <Head>
      <title>MiniCommerce - Detail</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content="MiniCommerce - Detail" />
      <meta name="description" content="MiniCommerce - Detail" />
      <meta name="keywords" content="MiniCommerce - Detail" />
    </Head>
    <DetailContainer />
  </Fragment>
);

Detail.getInitialProps = async (ctx) => {
  ctx.store.dispatch(getProductByIdAction(ctx.query.id));
};
export default Detail;
