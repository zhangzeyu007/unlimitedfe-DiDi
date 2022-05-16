/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-12 12:48:36
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-15 23:20:14
 * @FilePath: \unlimitedfe-DiDi\unlimitedServer\config\config.prod.ts
 */
// import { EggAppConfig, PowerPartial } from 'egg';
import { DefaultConfig } from './config.default'
export default () => {
  // const config: PowerPartial<EggAppConfig> = {};
  const config = {} as DefaultConfig
  return config;
};
