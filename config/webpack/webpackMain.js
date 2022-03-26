const developmentConfig = require("./webpack.development") // 开发配置
const productionConfig = require("./webpack.production") // 生产配置
const commonConfig = require("./webpack.common")// 公共配置

module.exports = {
  developmentConfig: developmentConfig,
  productionConfig: productionConfig,
  commonConfig: commonConfig,
}
