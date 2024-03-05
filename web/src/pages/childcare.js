import React from "react";
import HeroSection from "../components/childCare/HeroSection";
import { SEO } from "../components/SEO";
import CriteriaLists from "../components/childCare/CriteriaLists";


const ChildCarePage = () => (
  <>
    <SEO title="Child Care | RACOMA STRATEGIES" />
    <HeroSection />
    <CriteriaLists />
  </>
);

export default ChildCarePage;

export const Head = () => (
  <SEO title="Child Care | RACOMA STRATEGIES" />
);