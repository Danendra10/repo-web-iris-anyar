module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/',
  pages:{
    index:{
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Home",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    Achivements:{
      entry: "src/main.js",
      template: "public/index.html",
      filename: "Achivements.html",
      title: "Achivements",
      chunks: ["chunk-vendors", "chunk-common", "Achivements"]
    },
    ComingSoon:{
      entry: "src/main.js",
      template: "public/index.html",
      filename: "ComingSoon.html",
      title: "Coming Soon",
      chunks: ["chunk-vendors", "chunk-common", "ComingSoon"]
    },
    Publications:{
      entry: "src/main.js",
      template: "public/index.html",
      filename: "Publications.html",
      title: "Publications",
      chunks: ["chunk-vendors", "chunk-common", "Publications"]
    },
    ContactUs:{
      entry: "src/main.js",
      template: "public/index.html",
      filename: "ContactUs.html",
      title: "ContactUs",
      chunks: ["chunk-vendors", "chunk-common", "ContactUs"]
    },
  }
}
