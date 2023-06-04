import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import { ContentSectionStyles } from "../../styles/ourProcess/ContentSectionStyles";
import MyPortableText from "../MyPortableText";
import Button from "../buttons/Button";
import TextBlockCTAItem from "./TextBlockCTAItem";
import {
  TbCircle1Filled,
  TbCircle2Filled,
  TbCircle3Filled,
  TbCircle4Filled,
  TbCircle5Filled,
} from "react-icons/tb";

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
    <TbCircle1Filled />,
    <TbCircle2Filled />,
    <TbCircle3Filled />,
    <TbCircle4Filled />,
    <TbCircle5Filled />,
  ];
  const steps = stepArray.map((step, i) => (
    <li className="stepContainer" data-1={stepsData[step].headerText} key={i}>
      {iconsArray[i]}
      <p className="step__heading">
        <strong>{stepsData[step].headerText}</strong>
      </p>
      <MyPortableText value={stepsData[step]._rawSubText} />
    </li>
  ));

  return (
    <ContentSectionStyles>
      <section>
        <div className="timelineGrid">
          <div class="item-1 headerText">{stepsData.step1.headerText}</div>
          <div class="item-2"></div>
          <div class="item-3 headerText">{stepsData.step3.headerText}</div>
          <div class="item-4"></div>
          <div class="item-5 headerText">{stepsData.step5.headerText}</div>
          <div class="item-6 subText">
            <MyPortableText value={stepsData.step1._rawSubText} />
          </div>
          <div class="item-7"></div>
          <div class="item-8 subText">
            <MyPortableText value={stepsData.step3._rawSubText} />
          </div>
          <div class="item-9"></div>
          <div class="item-10 subText">
            <MyPortableText value={stepsData.step5._rawSubText} />
          </div>
          <div class="item-11">
            <div className="line"></div>
            {/* <div className="circleContainer circleContainer1">
              <div className="circle circle1"></div>
            </div>
            <div className="circleContainer circleContainer2">
              <div className="circle circle2"></div>
            </div>
            <div className="circleContainer circleContainer3">
              <div className="circle circle3"></div>
            </div>
            <div className="circleContainer circleContainer4">
              <div className="circle circle4"></div>
            </div>
            <div className="circleContainer circleContainer5">
              <div className="circle circle5"></div>
            </div> */}
  
 
            <div className="circleContainer">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div class="item-12"></div>
          <div class="item-13 headerText">{stepsData.step2.headerText}</div>
          <div class="item-14"></div>
          <div class="item-15 headerText">{stepsData.step4.headerText}</div>
          <div class="item-16"></div>
          <div class="item-17"></div>
          <div class="item-18 subText">
            <MyPortableText value={stepsData.step2._rawSubText} />
          </div>
          <div class="item-19"></div>
          <div class="item-8 subText">
            <MyPortableText value={stepsData.step4._rawSubText} />
          </div>
          <div class="item-21"></div>
        </div>
      </section>
    </ContentSectionStyles>
  );
}

export default ContentSection;

// import { graphql, useStaticQuery, Link } from 'gatsby';
// import React from 'react';
// import { ContentSectionStyles2 } from '../../styles/ourProcess/ContentSectionStyles2';
// import MyPortableText from '../MyPortableText';
// import Button from '../buttons/Button';
// import TextBlockCTAItem from './TextBlockCTAItem';
// import {TbCircle1Filled, TbCircle2Filled, TbCircle3Filled, TbCircle4Filled, TbCircle5Filled } from 'react-icons/tb'

// function ContentSection2() {
//   const data = useStaticQuery(graphql`
//     {
//         allSanityOurProcess {
//     nodes {
//       steps {
//         step1 {
//           headerText
//           _rawSubText
//         }
//         step2 {
//           headerText
//           _rawSubText
//         }
//         step3 {
//           headerText
//           _rawSubText
//         }
//         step4 {
//           headerText
//           _rawSubText
//         }
//         step5 {
//           headerText
//           _rawSubText
//         }
//       }
//     }
//   }
//     }
//   `);

//   const stepsData = data.allSanityOurProcess.nodes[0].steps;
//   const stepArray = Object.keys(stepsData);
//   const iconsArray = [
//     <TbCircle1Filled/>,
//     <TbCircle2Filled/>,
//     <TbCircle3Filled/>,
//     <TbCircle4Filled/>,
//     <TbCircle5Filled/>,
//   ];
//   const steps = stepArray.map((step, i) => (
//     <li className="stepContainer" data-1={stepsData[step].headerText} key={i}>
//         {iconsArray[i]}
//         <p className="step__heading">
//             <strong>{stepsData[step].headerText}</strong>
//           </p>
//           <MyPortableText value={stepsData[step]._rawSubText} />
//     </li>
//     // <li>
//     // <input type="radio" name="timeline-dot" data-description="1910" />
// 		// <div className="dot-info" data-description="1910">
// 		// 	<span className="year">1910</span>
// 		// 	<span className="label">headset</span>
// 		// </div>
//     // </li>
//   ))

//   return (
//     <ContentSectionStyles2>
//       <section>
//       <h1>Notable inventions, <span>1910–2000</span></h1>
// <div className="flex-parent">
// 	<div className="input-flex-container">
// 		<input type="radio" name="timeline-dot" data-description="step1" />
// 		<div className="dot-info" data-description="step1">
// 			<span className="year">1910</span>
// 			<span className="label">headset</span>
// 		</div>
// 		<input type="radio" name="timeline-dot" data-description="step2"/>
// 		<div className="dot-info" data-description="step2">
// 			<span className="year">1920</span>
// 			<span className="label">jungle gym</span>
// 		</div>
// 		<input type="radio" name="timeline-dot" data-description="step3" checked/>
// 		<div className="dot-info" data-description="step3">
// 			<span className="year">1930</span>
// 			<span className="label">chocolate chip cookie</span>
// 		</div>
// 		<input type="radio" name="timeline-dot" data-description="step4"/>
// 		<div className="dot-info" data-description="step4">
// 			<span className="year">1940</span>
// 			<span className="label">Jeep</span>
// 		</div>
// 		<input type="radio" name="timeline-dot" data-description="step5"/>
// 		<div className="dot-info" data-description="step5">
// 			<span className="year">1950</span>
// 			<span className="label">leaf blower</span>
// 		</div>
// 		<input type="radio" name="timeline-dot" data-description="1960"/>
// 		<div className="dot-info" data-description="1960">
// 			<span className="year">1960</span>
// 			<span className="label">magnetic stripe card</span>
// 		</div>
// 		<input type="radio" name="timeline-dot" data-description="1970"/>
// 		<div className="dot-info" data-description="1970">
// 			<span className="year">1970</span>
// 			<span className="label">wireless LAN</span>
// 		</div>
// 		<input type="radio" name="timeline-dot" data-description="1980"/>
// 		<div className="dot-info" data-description="1980">
// 			<span className="year">1980</span>
// 			<span className="label">flash memory</span>
// 		</div>
// 		<input type="radio" name="timeline-dot" data-description="1990"/>
// 		<div className="dot-info" data-description="1990">
// 			<span className="year">1990</span>
// 			<span className="label">World Wide Web</span>
// 		</div>
// 		<input type="radio" name="timeline-dot" data-description="2000"/>
// 		<div className="dot-info" data-description="2000">
// 			<span className="year">2000</span>
// 			<span className="label">Google AdWords</span>
// 		</div>
// 		<div id="timeline-descriptions-wrapper">
// 			<p data-description="1910">And future Call of Duty players would thank them.</p>
// 			<p data-description="1920">Because every kid should get to be Tarzan for a day.</p>
// 			<p data-description="1930">And the world rejoiced.</p>
// 			<p data-description="1940">Because building roads is inconvenient.</p>
// 			<p data-description="1950">Ain’t nobody got time to rake.</p>
// 			<p data-description="1960">Because paper currency is for noobs.</p>
// 			<p data-description="1970">Nobody likes cords. Nobody.</p>
// 			<p data-description="1980">Brighter than glow memory.</p>
// 			<p data-description="1990">To capitalize on an as-yet nascent market for cat photos.</p>
// 			<p data-description="2000">Because organic search rankings take work.</p>
//       <p data-description="step1">Step 1 Description</p>
//       <p data-description="step2">Step 2 Description</p>
//       <p data-description="step3">Step 3 Description</p>
//       <p data-description="step4">Step 4 Description</p>
//       <p data-description="step5">Step 5 Description</p>

// 		</div>
// 	</div>
// </div>

//         {/* <div className="contentSection__introText h3">
//           <MyPortableText value={content._rawIntroText} />
//         </div> */}
//         {/* <div className="contentSection__grid">
//           {contentBlockItems}
//         </div> */}
//         {/* <div className="stepsContainer">
//         <ul>
//           {steps}
//         </ul>
//         </div> */}
//       </section>
//     </ContentSectionStyles2>
//   );
// }

// export default ContentSection2;
