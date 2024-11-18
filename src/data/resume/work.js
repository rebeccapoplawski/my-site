/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: '7Rivers Inc.',
    position: 'Senior Analytics Lead (Contract Role)',
    url: 'https://7riversinc.com/',
    startDate: '2024-07-01',
    summary: '7Rivers is a Snowflake® Innovation Partner. Snowflake is a powerful cloud data and applications platform dedicated to mobilizing the world’s data. As a Snowflake Partner, 7Rivers can tap into their technology and use it to build innovative, custom solutions for clients that have a real impact on their businesses.',
    highlights: [

    ],
  },
  {
    name: 'Gibson Consulting',
    position: 'Senior Consultant',
    url: 'https://gibsonconsulting.com/',
    startDate: '2024-01-04',
    endDate: '2024-07-01',
    summary: 'For over 30 years, Gibson Consulting has been at the forefront of supply chain coonsulting. Specializing in three core areas that drive business excellence:  Strategic Sourcing Mastery, Logisitics Excellence, Data-Driven Insights.',
    highlights: [


    ],
  },
  {
    name: 'General Motors',
    position: 'Senior Engineer',
    url: 'https://www.gm.com/',
    startDate: '2019-06-01',
    endDate: '2023-10-01',
    summary:
      'IT Innovation Center: Global Purchasing and Supply Chain Manufacturing Organization',
    highlights: [
      'Multiple Roles/Teams: Data Architect, Bi Developer, Full-stack Web Developer',


    ],
  },
];

export default work;
