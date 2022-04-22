/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-12 12:48:36
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-21 22:56:35
 * @FilePath: \unlimitedServer\config\config.default.ts
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { Sequelize } from 'sequelize';
import * as path from 'path';

export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>

export interface BizConfig {
  sourceUrl: string
  news: {
    pageSize: number
    serverUrl: string
  }
  logger: {
    level?: 'info' | 'all' | 'INFO'
    basePath?: string
  }
}

export default (appInfo: EggAppInfo) => {

  const baseDir = appInfo.baseDir
   console.log(baseDir)

  const config = {
  } as PowerPartial<EggAppConfig>;

  config.vitePlugin = {
    devServer: true,
  };
  
  config.view = {
    defaultViewEngine: 'nunjucks',
    root: path.join(appInfo.baseDir, 'view/unlimitedfe'), 
    mapping: {
      '.html': 'nunjucks',
    },
  }

  config.static = {
    prefix: '/assets/', 
    dir: [
      path.join(appInfo.baseDir, 'view/unlimitedfe/assets'),
    ],
  }
  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1649738884531_2494';
  config.model = Sequelize;
  // add your egg config in here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    database: 'unlimitedfe',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
  };


  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
