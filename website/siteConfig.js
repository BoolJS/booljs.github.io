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
  repoUrl: 'https://www.github.com/booljs/booljs',
  organizationName: 'booljs',
  projectName: 'booljs.github.io',

  headerLinks: [
    { doc: 'doc1', label: 'Docs' },
    { href: 'https://doclets.io/BoolJS/booljs-api/master', label: 'API' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
    { href: 'https://github.com/booljs', label: 'GitHub' },
    { languages: true },
    { search: true }
  ],

  users,

  headerIcon: 'img/booljs.svg',
  footerIcon: 'img/booljs.svg',
  favicon: 'img/favicon.png',

  colors: {
    primaryColor: '#333',
    secondaryColor: '#EEE',
  },

  copyright: `Copyright © ${new Date().getFullYear()} Animal Technologies SAS`,
  highlight: {
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [ 'https://buttons.github.io/buttons.js' ],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/favicon.png',
  twitterImage: 'img/favicon.png',

  algolia: {
    appId: 'F3FBK9DWL7',
    apiKey: 'e7ee6a5d35ef53028719ace3dbf65de1',
    indexName: 'booljs'
  }
};

module.exports = siteConfig;
