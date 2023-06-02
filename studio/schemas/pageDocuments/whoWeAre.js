export default {
  title: 'Who We Are',
  name: 'whoWeAre',
  type: 'document',
  fields: [
    {
      title: 'SEO',
      name: 'seo',
      type: 'customSEO',
    },
    {
      title: 'Headshot Image',
      name: 'headshotImage',
      type: 'customImage',
    },
    {
      title: 'Caption Under Photo',
      name: 'title',
      type: 'normalText',
      description: 'ex: Adam Kaplan, Principal',
    },
    {
        title:'LinkedIn Url',
        name: 'linkedInUrl',
        type: 'string',
    },
        {
        title:'Email Address',
        name: 'email',
        type: 'string',
    },
    {
      type: 'textBlock',
      name: 'about',
      title: 'About',
    },
    {
        type:'textBlock',
        name: 'capitalPartners',
        title: 'Capital Partners',
    }
  ],
};
