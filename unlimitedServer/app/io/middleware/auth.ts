export default function () {
  return async (ctx, next) => {
    console.log('连接开始');
    const { socket } = ctx;
    // const id = socket.id;
    // const nsp = app.io.of('/');
    const query = socket.handshake.query;
    // ctx.logger.info('获取nsp');
    // 这里采用deviceId作为zoom的序号
    const { device_id } = query;
    // 用户加入
    socket.join(device_id);
    ctx.logger.info('socket join romm, id==', socket.id)
    // ctx.logger.info('加入房间');
    socket.emit('online', '连接成功');
    await next();
    ctx.logger.info('socket leave, id==', socket.id)
  }
}