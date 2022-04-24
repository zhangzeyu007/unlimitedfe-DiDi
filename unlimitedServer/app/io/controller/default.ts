/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-23 18:23:39
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-23 18:23:48
 * @FilePath: \unlimitedServer\app\io\controller\default.ts
 */
import { Controller } from 'egg'

class DefaultController extends Controller {
  async index(ctx: any):Promise<void> {
    // 在这里进行业务消息的push
    console.log('进io了');
    const { app, socket } = ctx;
    // const nsp:any = app.io.of('/');
    console.log('连接default');
    
    const body = ctx.request.body;
    try {
      // 后续根据设备id进行消息内容的分发
      socket.emit('online', body)
    } catch (error) {
      app.logger.error(error);
    }
  }
}

export default DefaultController