// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Larry's Blog",
  tagline: "JS, TS, Golang, Python, Vue, React",
  url: "https://larry-xue.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "larry-xue", // Usually your GitHub org/user name.
  projectName: "larry-xue.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: {
          path: "blog",
          // 一般使用场景：字符串 editUrl
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          // 高级使用场景：函数 editUrl
          // editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          //   `https://github.com/larry-xue/docusaurus/edit/main/website/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogTitle: "博客标题",
          blogDescription: "博客",
          blogSidebarCount: 5,
          blogSidebarTitle: "Recent docs",
          routeBasePath: "blog",
          include: ["**/*.{md,mdx}"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          // postsPerPage: ,
          blogListComponent: "@theme/BlogListPage",
          blogPostComponent: "@theme/BlogPostPage",
          blogTagsListComponent: "@theme/BlogTagsListPage",
          blogTagsPostsComponent: "@theme/BlogTagsPostsPage",
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          showReadingTime: true,
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Larry's blog",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://github.com/Larry-Xue",
            label: "GitHub",
            position: "right",
          },
          {
            position: "left",
            label: "javascript",
            to: "docs/javascript/",
          },
          {
            position: "left",
            label: "golang",
            to: "docs/golang/"
          },
          {
            position: "left",
            label: "tags",
            to: "docs/tags"
          }
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/Larry-Xue",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Larry xue. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
