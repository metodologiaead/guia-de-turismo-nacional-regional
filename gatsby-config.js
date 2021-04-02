module.exports = {
  siteMetadata: {
    title: `Curso Técnico em Guia de Turismo Nacional/Regional`,
    siteUrl: 'https://guia-de-turismo-nacional-regional.metodologiaead.com.br',
    description: 'Planejamento, execução e avaliação de viagens.',
    author: `Metodologia EAD`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '944880872583095',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-P3RCDPV',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://guia-de-turismo-nacional-regional.metodologiaead.com.br`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
