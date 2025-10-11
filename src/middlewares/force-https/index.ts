import type { Next } from 'koa';

export default () => {
  return async (ctx: any, next: Next) => {
    const proto = ctx.get('X-Forwarded-Proto') || '';
    const ssl = ctx.get('X-Forwarded-Ssl') || '';
    // If any upstream says HTTPS, mark secure before session runs
    if (proto.toLowerCase().includes('https') || ssl.toLowerCase() === 'on') {
      ctx.request.secure = true;
    }
    await next();
  };
};