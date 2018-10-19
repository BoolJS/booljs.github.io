const users = [
    {
        caption: 'Universidad de los Andes',
        image: '/img/users/uniandes.svg',
        infoLink: 'https://www.uniandes.edu.co',
        pinned: true,
    },
    {
        caption: 'Poetri',
        image: '/img/users/poetri.png',
        infoLink: 'https://poetri.co',
        pinned: true,
    }
];

const siteConfig = {
    title: 'Bool.js',
    tagline: '',

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
    twitter: true,
    twitterUsername: 'itsbooljs',
    ogImage: 'img/favicon.png',
    twitterImage: 'img/favicon.png',

    algolia: {
        appId: 'DOCSEARCH',
        apiKey: '16179099955cea63cd3fc38785469364',
        indexName: 'bool_js',
        algoliaOptions: { facetFilters: [ 'language:en' ] }
    },

    cleanUrl: true,
    scrollToTop: true,
};

module.exports = siteConfig;
