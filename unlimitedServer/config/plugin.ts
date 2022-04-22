/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-12 12:48:36
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-21 23:14:16
 * @FilePath: \unlimitedServer\config\plugin.ts
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },  
  nunjucks: {
  enable: true,
  package: 'egg-view-nunjucks',
  },
  vitePlugin: {
    // 启用 egg-vite-plugin
    enable: true,
    package: 'egg-vite-plugin',
  },
  decoratorRouter: {
    enable: true,
    package: 'egg-decorator-router',
  },
};

export default plugin;
