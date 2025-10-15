import fs from 'fs';

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://localhost:1337'),
  app: { keys: env.array('APP_KEYS') },
  https: {
    key: fs.readFileSync(env('SSL_KEY_PATH'), 'utf8'),
    cert: fs.readFileSync(env('SSL_CERT_PATH'), 'utf8'),
  },
});
