module.exports = {
  siteMetadata: {
    title: `Curso Técnico em Transações Imobiliárias`,
    siteUrl: 'https://transacoes-imobiliarias.metodologiaead.com.br',
    description: 'Organiza ações de compra venda e locação de imóveis.',
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'AW-408801215', // Google Ads / Adwords / AW
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://transacoes-imobiliarias.metodologiaead.com.br/`,
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
