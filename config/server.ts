// config/server.ts
export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL'),
  proxy: true,
  app: { keys: env.array('APP_KEYS') },
  // Optional: silence the deprecation later by migrating to session settings
  // admin: {
  //   auth: { secret: env('ADMIN_JWT_SECRET') },
  // },
});
