import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
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
