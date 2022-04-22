/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-12 12:48:36
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-22 11:56:20
 * @FilePath: \unlimitedServer\app\controller\home.ts
 */
import { Controller, Context } from 'egg';
import { Route, HttpGet, HttpPost } from 'egg-decorator-router';

@Route()
class Home extends Controller { 
  @HttpGet('/')
  @HttpGet('*')
  public async index(ctx: Context) {
    await ctx.vite.render('unlimitedfe/index.html')
  }
  @HttpPost('/api')
  async getMenu(ctx: Context): Promise<void>{
    const { helper, service} = ctx;
    const { sendResponse } = helper;
    const result = await service.device.list({ product_id: 2 })
    ctx.response.body = sendResponse({...result})
  }
}

export default Home