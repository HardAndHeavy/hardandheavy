const adapter = require("@dangreaves/gatsby-adapter-aws/adapter")

module.exports = {
  adapter: adapter.createAdapter({
    cacheControl: {
      "/*.js": "IMMUTABLE",
      "/*.js.map": "IMMUTABLE",
      "/*.css": "IMMUTABLE",
      "/page-data/app-data.json": "NO_CACHE",
      "/~partytown/**": "NO_CACHE",
    },
  }),
  siteMetadata: {
    title: `Григорьев`,
    author: `Иван Григорьев`,
    description: `Это интернет-журнал обо всём. Я увлекаюсь программированием и саморазвитием. Люблю музыку, спорт и конечно же свою семью.`,
    siteUrl: `https://hardandheavy.ru/`,
    social: {
      telegram: `https://t.me/HardAndHeavy`,
      mail: `HardAndHeavyMetal@yandex.ru`,
      habr: `https://habr.com/ru/users/Soloist/publications/articles/`,
      github: `https://github.com/HardAndHeavy`,
    },
    git: `https://github.com/HardAndHeavy/hardandheavy`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-embedder`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-139535011-2`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `grig blog`,
        short_name: `Григорьев`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `static/phoneIcon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
