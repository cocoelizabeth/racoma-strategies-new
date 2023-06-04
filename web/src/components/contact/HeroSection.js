import React, { useRef, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { HeroSectionStyles } from '../../styles/contact/HeroSectionStyles';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';
import { socialLinks } from '../../constants/socialLinks';

function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityHome {
        nodes {
          hero {
            headlineText
            _rawSubHeadlineText
            cta
            link
          }
        }
      }
    }
  `);

  const { hero } = data.allSanityHome.nodes[0];

  return (
    <HeroSectionStyles>
      <section>
        <div className="hero__wrapper">
          <div className="headlineText h2">GET IN TOUCH</div>
          <div className="subheadingText">
            <div className="subheadingText__text">
              Let’s talk about your transition goals and how Racoma Strategies
              can make them become a reality. We’d love to connect.
            </div>

              <ul className="contactLinks">
                {socialLinks.map((item) => (
                  <li key={item.name}>
                    <a href={item.url}>{item.text}</a>
                  </li>
                ))}
              </ul>
        

            {/* <span className="placeholder" /> */}
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
