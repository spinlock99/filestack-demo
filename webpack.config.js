module.exports = function(env) {
  console.log("webpack.config.js");
  return require(`./webpack.${env}.js`)
}
