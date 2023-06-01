import React from 'react';
import { Link } from 'gatsby';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import { socialLinks } from '../constants/socialLinks';
import Button from './buttons/Button';

function Footer() {
  return (
    <FooterStyles>
      <section>
        <div className="footer__wrapper">
          <div className="footer__logo col">
            <Link to="/">
              RACOMA <br /> / Strategies
            </Link>
          </div>
          <div className="footer__contactLinks col">
            <ul className="">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.url}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__button col">
            <Button to="/" tag={Link} variant="primaryFilled">
              Intermediary Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul> */}

      {/* <ParagraphText className="copyright">
          © Racoma Strategies LLC {new Date().getFullYear()}. All rights
          reserved.
        </ParagraphText> */}
    </FooterStyles>
  );
}

export default Footer;
