const { developmentConfig, productionConfig, commonConfig } = require("./webpack/webpackMain");
const { merge } = require("webpack-merge");

module.exports = (env, args) => {
  switch (args.mode) {
    case "development":
      return merge(commonConfig, developmentConfig);
    case "production":
      return merge(commonConfig, productionConfig);
    default:
      throw new Error("No matching configuration was found!");
  }
};