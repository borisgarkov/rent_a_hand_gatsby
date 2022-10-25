module.exports = {
    siteMetadata: {
        title: `Rent A Hand`,
        description: `Rent A Hand - jobs portal - портал за работа.`,
        siteUrl: `https://rentahandgatsbymaster.gatsbyjs.io/`,
    },
    plugins: [
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Comfortaa`,
                        file: `https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Open+Sans:wght@300;400&display=swap`,
                    },
                ],
            },
        },
        {
          resolve: 'gatsby-plugin-manifest',
          options: {
            icon: 'src/images/Rent A Hand_D1-01.jpg',
          },
        },
    ]
}
