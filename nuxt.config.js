module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'GreenHub',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A collaborative approach to power consumption analysis of Android devices' },
      { keywords: 'GreenHub,Android,Battery Saver,Battery Monitor,Collaborative,Power consumption' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato|Montserrat|Muli' }
    ]
  },
  /**
   * Plugins
  */
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  /*
  ** Global CSS
  */
  css: [
    { src: 'bulma/css/bulma.css', lang: 'css' },
    { src: 'font-awesome/css/font-awesome.css', lang: 'css' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
