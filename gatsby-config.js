module.exports = {
  siteMetadata: {
    title: `Curso Técnico em Transações Imobiliárias`,
    siteUrl: 'https://transacoes-imobiliarias.metodologiaead.com.br',
    description: 'Organiza ações de compra venda e locação de imóveis.',
    author: `Metodologia EAD`,
    image: '/logo.png',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
