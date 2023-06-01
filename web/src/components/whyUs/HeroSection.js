import React, { useRef, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { HeroSectionStyles } from '../../styles/whyUs/HeroSectionStyles';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';

function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityWhyUs {
        nodes {
          hero {
            headerText
            _rawSubText
          }
        }
      }
    }
  `);

  const { hero } = data.allSanityWhyUs.nodes[0];

  return (
    <HeroSectionStyles>
      <section>
        <div className="hero__wrapper">
          <div className="headlineText h2">{hero.headerText}</div>
          <div className="subheadingText">
            <MyPortableText
              className="subheadingText__text"
              value={hero._rawSubText}
            />
            <span className="placeholder" />
            {/* <Button to={hero.link} tag={Link} className="heroCTA">
              {hero.cta}
            </Button> */}
          </div>
        </div>

      </section>
    </HeroSectionStyles>
  );
}

export default HeroSection;
