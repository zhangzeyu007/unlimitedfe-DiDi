import { Controller } from 'egg';

class Home extends Controller { 
  public async index() {
    const { ctx } = this;
    ctx.body = 'zhangzeyu'
  }
}

export default Home