const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Zachary Burk', // Navigation and Site Title
  siteTitleAlt: 'Zachary Burk', // Alternative Site title for SEO
  siteTitleShort: 'Zachary Burk', // short_name for manifest
  siteHeadline: 'Raleigh Web Developer and Dental Student', // Headline for schema.org JSONLD
  siteUrl: 'https://zacharyburk.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Raleigh Web Developer and Dental Student',
  author: 'Zachary Burk', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@cara', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-112375617-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
