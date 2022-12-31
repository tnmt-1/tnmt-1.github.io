// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'mt2m10',
  tagline: 'Dinosaurs are cool',
  url: 'https://mt2m10.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mt2m10', // Usually your GitHub org/user name.
  projectName: 'mt2m10.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/blog',
          blogTitle: 'mt2m10 blog!',
          blogDescription: 'mt2m10 powered blog!',
          blogSidebarCount: 0,
          postsPerPage: 1,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-FTSK23J86W',
          anonymizeIP: true,
        },
      }),
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: [
          '/tags/**',
          '/docs/**',
        ],
        filename: 'sitemap.xml',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'mt2m10',
        logo: {
          alt: 'My Site Logo',
          src: 'img/beer.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            position: 'right',
            label: 'Profile',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/blog/archive', label: 'Archives', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} mt2m10, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'csharp', 'php'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      metadata: [{ name: 'twitter:card', content: 'summary' }],
    }),

  plugins: [
    [require.resolve('@easyops-cn/docusaurus-search-local'), {
      // whether to index docs pages
      indexDocs: true,

      // whether to index blog pages
      indexBlog: true,

      // whether to index static pages
      // /404.html is never indexed
      indexPages: true,

      // language of your documentation, see next section
      language: ["ja"],

      hashed: "query",
    }]
  ],
  titleDelimiter: "🍻"
};

module.exports = config;
