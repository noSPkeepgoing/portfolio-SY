import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import ScrollToTop from '../components/ScrollToTop';

export default function Root() {
  return (
    <section>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}
