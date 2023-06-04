import React from 'react';
import HeroSection from '../components/contact/HeroSection';
import { SEO } from '../components/SEO';
import ContactSection from '../components/contact/ContactSection';

const IndexPage = () => (
  <>
    <HeroSection />
  </>
);

export default IndexPage;

export const Head = () => (
  <SEO title="Contact" />
)
