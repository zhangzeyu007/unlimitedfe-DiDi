export default function () {
  return async (ctx, next) => {
    ctx.socket.emit('', '');
    await next();
  }
}