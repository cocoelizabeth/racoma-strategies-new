import { MdChildCare } from 'react-icons/md';

export default {
  title: "Child Care",
  name: "childCare",
  type: "document",
  icon: MdChildCare,
  fields: [
    {
      title: "SEO",
      name: "seo",
      type: "customSEO",
      description: "IGNORE THIS",
    },
    {
      title: "Hero Section",
      name: "hero",
      type: "textBlock",
      description: "First section on page with heading & paragraph text",
    },
    {
      title: "Content Section",
      name: "contentSection",
      type: "criteriaLists",
      description: "Second section on page with criteria lists"
    },
  ],
};
