import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Premiere Pluie`,
    siteUrl: `https://premierepluie.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     url: "https://premierepluie.com/graphql",
    //     schema: {
    //       timeout: 1000000,
    //       perPage: 10,
    //       requestConcurrency: 5,
    //     },
    //     html: {
    //       useGatsbyImage: false,
    //       createStaticFiles: false,
    //     },
    //     type: {
    //       MediaItem: {
    //         exclude: true,
    //       },
    //     },
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-use-query-params",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["GA-TRACKING_ID"],
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
