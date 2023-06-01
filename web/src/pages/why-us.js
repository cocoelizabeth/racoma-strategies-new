import React from "react";
import HeroSection from "../components/whyUs/HeroSection";
import { SEO } from "../components/SEO";
import ContentSection from "../components/whyUs/ContentSection";
import CriteriaLists from "../components/whatWeLookFor/CriteriaLists";
import ContactSection from "../components/homepage/ContactSection";
const WhyUs = () => (
  <>
    <SEO title="Why Us" />
    <HeroSection />
    <ContentSection />
    {/* <ComparisonTable /> */}
    {/* <CriteriaLists /> */}
    {/* <ContactSection /> */}
  </>
);

export default WhyUs;
