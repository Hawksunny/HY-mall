const { defineConfig } = require('@vue/cli-service');
// 配置别名相关的代码
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,

  // 传统修改 webpack 配置（最后会自动 merge）
  configureWebpack: {},

  // 链式修改 webpack 配置（高级）
  chainWebpack: config => {
    // 配置html插件：修改网页文档的标题
    config.plugin('html').tap(args => {
      args[0].title = 'HY商城';
      return args;
    });
    // 配置别名
    config.resolve.alias
      // .set('@', resolve('src')) // vueCLI已经帮我们配置了
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('network', resolve('src/network'))
      .set('views', resolve('src/views'));
  },
});
