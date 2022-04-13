import { Controller, Context } from 'egg';

class Home extends Controller { 
  public async index() {
    const { ctx } = this;
    ctx.body = 'zhangzeyu'
  }
  async getMenu(ctx: Context): Promise<void>{
    const { helper, service} = ctx;
    const { sendResponse } = helper;
    const result = await service.device.list({ product_id: 2 })
    ctx.response.body = sendResponse({...result})
  }
}

export default Home