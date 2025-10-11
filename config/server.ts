export default ({ env }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://cms.trmarvin.org'), // must be https and match your domain
  proxy: true, // critical: tells Koa to trust X-Forwarded-* headers
  app: { keys: env.array('APP_KEYS') },
});