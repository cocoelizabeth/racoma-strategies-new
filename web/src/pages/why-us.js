import React from "react";
import HeroSection from "../components/whyUs/HeroSection";
import { SEO } from "../components/SEO";
import ContentSection from "../components/whyUs/ContentSection";
const WhyUsPage = () => (
  <>
    <SEO title="Why Us | RACOMA STRATEGIES" />
    <HeroSection />
    <ContentSection />
    {/* <ComparisonTable /> */}
    {/* <CriteriaLists /> */}
    {/* <ContactSection /> */}
  </>
);

export default WhyUsPage;

export const Head = () => <SEO title="Why Us | RACOMA STRATEGIES" />;