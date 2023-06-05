import React from 'react';
import HeroSection from '../components/contact/HeroSection';
import { SEO } from '../components/SEO';
import ContactSection from '../components/contact/ContactSection';

const ContactPage = () => (
  <>
    <HeroSection />
  </>
);

export default ContactPage;

export const Head = () => (
  <SEO title="Contact | RACOMA STRATEGIES" />
)
