// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function config() {
  const remarkBreaks = (await import('remark-breaks')).default;

  return {
    title: 'mahlog',
    tagline: 'mahlog are cool',
    url: 'https://blog-mt2m10.vercel.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: 'mt2m10', // Usually your GitHub org/user name.
    // projectName: 'mt2m10.github.io', // Usually your repo name.

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
          docs: false,
          blog: {
            showReadingTime: true,
            routeBasePath: '/',
            blogTitle: 'mahlog!',
            blogDescription: 'mahlog powered blog!',
            blogSidebarCount: 10,
            postsPerPage: 5,
            remarkPlugins: [remarkBreaks],
            blogSidebarTitle: "最近の投稿"
          },
          pages: {
            beforeDefaultRemarkPlugins: [remarkBreaks],
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
          gtag: {
            trackingID: 'G-9JQ9W0NW68',
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
          title: 'mahlog',
          logo: {
            alt: 'My Site Logo',
            src: 'img/beer.png',
          },
          items: [
            { to: '/', label: 'Blog', position: 'left' },
            { to: '/archive', label: 'Archives', position: 'left' },
            {
              to: '/about',
              position: 'right',
              label: 'Profile',
            },
            {
              to: '/policy',
              position: 'right',
              label: 'Policy',
            },
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
          copyright: `Copyright © ${new Date().getFullYear()} mahlog, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ['java', 'csharp', 'php'],
        },
        colorMode: {
          defaultMode: 'dark',
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        metadata: [{ name: 'twitter:card', content: 'summary' }],
      }),

    plugins: [
      [require.resolve('@easyops-cn/docusaurus-search-local'), {
        // whether to index docs pages
        indexDocs: false,

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
  }
};

module.exports = config;
