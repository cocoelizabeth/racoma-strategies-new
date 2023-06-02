import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import { ContentSectionStyles } from "../../styles/whoWeAre/ContentSectionStyles";
import MyPortableText from "../MyPortableText";
import Button from "../buttons/Button";
import TextBlockCTAItem from "../homepage/TextBlockCTAItem";

function ContentSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityWhoWeAre {
        nodes {
      headshotImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      title {
        children {
          text
        }
      }
      about {
        headerText
        _rawSubText
      }
      email
      linkedInUrl
      seo {
        title
        slug {
          current
        }
        description
      }
      capitalPartners {
        headerText
        _rawSubText
      }
    }
      }
    }
  `);
    
  const content = data.allSanityWhoWeAre.nodes[0];
  const headshotImage = {
    imageData: content.headshotImage.asset.gatsbyImageData,
    altText: content.headshotImage.alt,
    caption: content.title[0].children[0].text,
  }
  const linkedInUrl = content.linkedInUrl;
  const email = "mailto:".concat(content.email);
  const about = {
    title: content.about.headerText,
    body: content.about._rawSubText,
  }
  const capitalPartners = {
    title: content.capitalPartners.headerText,
    body: content.capitalPartners._rawSubText,
  }

  // const contentBlocks = [
  //   content.list1,
  //   content.list2,
  //   content.list3,
  //   content.list4,
  // ];
  // const contentBlockItems = contentBlocks.map((item) => (
  //   <TextBlockCTAItem
  //     headerText={item.headerText}
  //     _rawSubText={item._rawSubText}
  //     _key={item._key}
  //   />
  // ));

  return (
    <ContentSectionStyles>
      <section>
      {/* <h1>{content.capitalPartners.headerText}</h1> */}

        {/* <div className="criteriaListContainer">
          <div className="categoryTitle h2">{content.list1.headerText}</div>
          <div className="criteriaListText">
            <MyPortableText value={content.list1._rawSubText} />
          </div>
        </div>
        <div className="criteriaListContainer">
          <div className="categoryTitle h2">{content.list2.headerText}</div>
          <div className="criteriaListText">
            <MyPortableText value={content.list2._rawSubText} />
          </div>
        </div>
          <div className="criteriaListContainer">
          <div className="categoryTitle h2">{content.list3.headerText}</div>
          <div className="criteriaListText">
            <MyPortableText value={content.list3._rawSubText} />
          </div>
        </div> */}


      </section>
    </ContentSectionStyles>
  );
}

export default ContentSection;
