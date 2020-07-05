module.exports = {
  siteMetadata: {
    description: "Personal page of Elisheba Anderson",
    locale: "en",
    title: "Elisheba Anderson",
    showThemeLogo: true
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        theme: "classic"
      }
    }
  ]
};
