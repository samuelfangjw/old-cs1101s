module.exports = {
  title: 'Sam\'s CS1101S page',
  tagline: 'My teaching resources for CS1101S this semester',
  url: 'http://samuelfangjw.github.io/',
  baseUrl: '/CS1101S/',
  noIndex: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'samuelfangjw', // Usually your GitHub org/user name.
  projectName: 'CS1101S', // Usually your repo name.
  themeConfig: {
    prism: {
      defaultLanguage: 'javascript',
      theme: require('prism-react-renderer/themes/oceanicNext'),
    },
    navbar: {
      title: 'Studio XX',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Notes',
          position: 'left',
        },
        {to:'slides/', label:'Slides', position:'left'},
        {
          href: 'https://github.com/samuelfangjw/CS1101S',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/samuelfangjw/CS1101S',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/samuelfangjw/CS1101S/blob/main',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
