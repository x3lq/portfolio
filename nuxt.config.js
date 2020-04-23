export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/png',
                href: '/x_256.png'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=BenchNine:wght@300;400;700&display=swap'
            }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/apollo'
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    env: {
        baseURL: process.env.baseURL || 'http://localhost:1337',
        baseGQLPath: process.env.baseGQLPath || 'http://localhost:1337/graphql'
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        }
    },
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: process.env.baseGQLPath || 'http://localhost:1337/graphql',
                cors: {
                    origin: '*',
                    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
                    preflightContinue: false,
                    optionsSuccessStatus: 204,
                    credentials: false
                }
            }
        }
    },
    test: /\.(graphql|gql)$/,
    use: [
        { loader: 'graphql-tag/loader' }
    ]
}
