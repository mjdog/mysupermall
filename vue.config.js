module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  // devServer:{
  //         host: '123.157.244.6',
  //         public:'123.157.244.6:7676',
  //         port: 8080,
  //         https: false,
  //         hotOnly: false,
  //         disableHostCheck:true,
  //         open: true // 配置自动启动浏览器
  //     }
}
