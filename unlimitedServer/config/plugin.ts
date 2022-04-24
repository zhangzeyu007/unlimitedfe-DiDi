/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-12 12:48:36
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-23 18:15:01
 * @FilePath: \unlimitedServer\config\plugin.ts
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },  
  nunjucks: {
  enable: true,
  package: 'egg-view-nunjucks',
  },
  io: {
    enable: true,
    package: 'egg-socket.io'
  },
};

export default plugin;
