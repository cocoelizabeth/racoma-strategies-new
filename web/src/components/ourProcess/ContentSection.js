import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import { ContentSectionStyles } from '../../styles/ourProcess/ContentSectionStyles';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';
import TextBlockCTAItem from './TextBlockCTAItem';

function ContentSection() {
  const data = useStaticQuery(graphql`
    {
        allSanityOurProcess {
    nodes {
      steps {
        step1 {
          headerText
          _rawSubText
        }
        step2 {
          headerText
          _rawSubText
        }
        step3 {
          headerText
          _rawSubText
        }
        step4 {
          headerText
          _rawSubText
        }
        step5 {
          headerText
          _rawSubText
        }
      }
    }
  }
    }
  `);

  const steps = data.allSanityOurProcess.nodes[0].steps;
  // const contentBlocks = [
  //   steps.step1,
  //   steps.step2,
  //   steps.step3,
  //   steps.step4,
  // ];
  // const contentBlockItems = contentBlocks.map((item) => (
  //   <TextBlockCTAItem
  //     headerText={item.headerText}
  //     _rawSubText={item._rawSubText}
  //     cta={item.cta}
  //     link={item.link}
  //     _key={item._key}
  //   />
  // ));

  return (
    <ContentSectionStyles>
      <section>
        {/* <div className="contentSection__introText h3">
          <MyPortableText value={content._rawIntroText} />
        </div> */}
        {/* <div className="contentSection__grid">
          {contentBlockItems}
        </div> */}
        <div className="contentSection__grid_row">
          <p className="contentSection_smallHeading">
            <strong>{steps.step1.headerText}</strong>
          </p>
          <MyPortableText value={steps.step1._rawSubText} />
          {/* BLOCK 2 */}

          <p className="contentSection_smallHeading">
            <strong>{steps.step2.headerText}</strong>
          </p>
          <MyPortableText value={steps.step2._rawSubText} />
        </div>
        <div className="contentSection__grid_row">
          <p className="contentSection_smallHeading">
            <strong>{steps.step3.headerText}</strong>
          </p>
          <MyPortableText value={steps.step3._rawSubText} />
          {/* BLOCK 2 */}

          <p className="contentSection_smallHeading">
            <strong>{steps.step4.headerText}</strong>
          </p>
          <MyPortableText value={steps.step4._rawSubText} />
        </div>
        {/* <BlogGrid blogs={featuredBlogs} /> */}
      </section>
    </ContentSectionStyles>
  );
}

export default ContentSection;
