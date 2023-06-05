import React, { useRef, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { ComparisonTableStyles } from "../../styles/whyUs/ComparisonTableStyles";
import MyPortableText from "../MyPortableText";
import Button from "../buttons/Button";

function ComparisonTable() {
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
    <ComparisonTableStyles>
      <section>
      {/* <h3>RACOMA STRATEGIES VS. PRIVATE EQUITY VS. COMPETITOR ACQUISITION</h3> */}
        <table>
          <thead>
            <tr>
              <th></th>
              <th> RACOMA STRATEGIES</th>
              <th>PRIVATE EQUITY</th>
              <th>COMPETITOR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> SELLER’S PROFIT</th>
              <td> Major liquidity event upon close</td>
              <td>
                {" "}
                Often tied to earnout and performance metrics, or long-term
                ongoing success of the business
              </td> 
              <td>
                {" "}
                Often tied to earnout and performance metrics as well as
                Seller’s continued roll working as a manager for the buyer
              </td>
            </tr>
            <tr>
              <th> TIME TO CLOSE</th>
              <td>
                2-5 months dealing with one counterparty and decision maker
              </td>
              <td>
                6 months - 1 year dealing with several counterparties and
                investment committees needed to approve
              </td>
              <td>
                9 months to over 1 year dealing with several layers of approval
                and a protracted integration period
              </td>
            </tr>
            <tr>
              <th> EASE OF TRANSACTION</th>
              <td>
                Completely flexible to Seller’s needs and circumstances. We have
                no return metrics or investor board that needs to weigh in
              </td>
              <td>
                Driven by required return thresholds for investors and other
                strict requirements
              </td>
              <td>
                Structured to protect acquiring company from risk in a
                potentially disadvantageous situation for Seller
              </td>
            </tr>
            <tr>
              <th> SELLER’S FUTURE</th>
              <td>Extremely flexible to Seller’s preference</td>
              <td>
                Full-time ongoing operating responsibility with strict investor
                oversite
              </td>
              <td>
                Required to stay on for extended time as a business unit manager
                working in a corporate structure
              </td>
            </tr>
            <tr>
              <th> BUSINESS’S FUTURE</th>
              <td>
                Remain an independent company with 100% of new owner’s focus and
                commitment
              </td>
              <td>
                One of many companies within a portfolio, often bought to be
                resold within 3-5 years after aggressive cost cutting measures
              </td>
              <td>
                Small piece of a larger business, often with less autonomy and
                decreased ability to serve customers and employees
              </td>
            </tr>
            <tr>
              <th>EMPLOYEES’ FUTURE</th>
              <td>
                More critical than ever with significant opportunity to grow and
                be promoted within the company
              </td>
              <td>At risk due to private equity cost cutting measures</td>
              <td>
                At risk as competitor will have their own employees and
                terminate those that are redundant
              </td>
            </tr>
            <tr>
              <th>SOURCE OF CAPITAL</th>
              <td>
                Personal wealth and committed group of high net worth and ultra
                high net worth individuals
              </td>
              <td>
                Institutional Funds, Sovereign Wealth Funds, and Pension Funds
                that have limited time to generate specific returns
              </td>
              <td>Company performance and capital market cycle </td>
            </tr>
          </tbody>
        </table>
      </section>
    </ComparisonTableStyles>
  );
}

export default ComparisonTable;
