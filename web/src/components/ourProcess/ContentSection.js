import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import { ContentSectionStyles } from '../../styles/ourProcess/ContentSectionStyles';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';
import TextBlockCTAItem from './TextBlockCTAItem';
import {TbCircle1Filled, TbCircle2Filled, TbCircle3Filled, TbCircle4Filled, TbCircle5Filled } from 'react-icons/tb'

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

  const stepsData = data.allSanityOurProcess.nodes[0].steps;
  const stepArray = Object.keys(stepsData);
  const iconsArray = [
    <TbCircle1Filled/>,
    <TbCircle2Filled/>,
    <TbCircle3Filled/>,
    <TbCircle4Filled/>,
    <TbCircle5Filled/>,
  ];
  const steps = stepArray.map((step, i) => (
    <li className="stepContainer" data-1={stepsData[step].headerText} key={i}>
        {iconsArray[i]}
        <p className="step__heading">
            <strong>{stepsData[step].headerText}</strong>
          </p>
          <MyPortableText value={stepsData[step]._rawSubText} />
    </li>
  ))


  return (
    <ContentSectionStyles>
      <section>
        {/* <div className="contentSection__introText h3">
          <MyPortableText value={content._rawIntroText} />
        </div> */}
        {/* <div className="contentSection__grid">
          {contentBlockItems}
        </div> */}
        <div className="stepsContainer">
        <ul>
          {steps}
        </ul>
        </div>
      </section>
    </ContentSectionStyles>
  );
}

export default ContentSection;
