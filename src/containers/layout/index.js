import React from 'react';
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
