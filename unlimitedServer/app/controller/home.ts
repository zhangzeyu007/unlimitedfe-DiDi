/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-12 12:48:36
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-24 13:25:53
 * @FilePath: \unlimitedServer\app\controller\home.ts
 */

import { Controller, Context } from 'egg';

class Home extends Controller { 

  public async index(ctx: Context) {
    await ctx.render('/unlimitedfe/index.html')
    ctx.body = 'zzy'
    const device_id = '11'
    const namespace: any = ctx.app.io.of('/');
    namespace.to(device_id).emit('message', {zzy:'哈哈哈'});
  }

  async getMenu(ctx: Context): Promise<void>{
    const { helper, service} = ctx;
    const { sendResponse } = helper;
    const result = await service.device.list({ product_id: 2 })
    ctx.response.body = sendResponse({...result})
  }
}

export default Home