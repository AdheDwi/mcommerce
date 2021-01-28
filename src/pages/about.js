import React, { Fragment } from 'react';
import Head from 'next/head';
import AboutContainer from '../containers/about';

const About = props => (
  <Fragment>
    <Head>
      <title>About {props.id} | Next.js</title>
    </Head>
    <AboutContainer {...props} />
  </Fragment>
);

About.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default About;
