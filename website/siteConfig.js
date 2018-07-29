/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Universidad de los Andes',
    image: '/img/users/uniandes.svg',
    infoLink: 'https://www.uniandes.edu.co',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Bool.js',
  url: 'https://bool.js.org',
  baseUrl: '/',
  headerLinks: [
    { doc: 'doc1', label: 'Docs' },
    { href: 'https://doclets.io/BoolJS/booljs-api/master', label: 'API' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
    { search: true, label: 'Search' },
    { href: 'https://github.com/booljs', label: 'GitHub' },
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/booljs.svg',
  footerIcon: 'img/booljs.svg',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#666',
    secondaryColor: '#EEE',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Your Name or Your Company Name',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
