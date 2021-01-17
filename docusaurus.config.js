module.exports = {
  title: 'Studio T03\'s CS1101S page',
  tagline: 'Resources for Studio T03',
  url: 'http://samuelfangjw.github.io/',
  baseUrl: '/CS1101S/',
  noIndex: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'samuelfangjw', // Usually your GitHub org/user name.
  projectName: 'CS1101S', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      defaultLanguage: 'javascript',
      theme: require('prism-react-renderer/themes/oceanicNext'),
    },
    navbar: {
      title: 'Studio T03',
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
      copyright: 'Made with ♡ using Docusaurus 2',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Source Academy',
              to: 'https://sourceacademy.nus.edu.sg/'
            },
            {
              label: 'Style Guide',
              to: 'https://source-academy.github.io/source/source_styleguide.pdf'
            },
            {
              label: 'Official Textbook',
              to: 'https://source-academy.github.io/sicp/'
            }
          ],
        },
        {
          title: 'Contribute',
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
          editUrl:
            'https://github.com/samuelfangjw/CS1101S/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
