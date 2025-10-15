import fs from 'fs';

export default ({ env }) => {
  const keyPath = env('SSL_KEY_PATH');
  const certPath = env('SSL_CERT_PATH');

  const https =
    keyPath && certPath
      ? {
          key: fs.readFileSync(keyPath, 'utf8'),
          cert: fs.readFileSync(certPath, 'utf8'),
        }
      : undefined;

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env('PUBLIC_URL', env.bool('SSL_KEY_PATH', false) ? 'https://localhost:1337' : 'http://localhost:1337'),
    app: { keys: env.array('APP_KEYS') },
    ...(https ? { https } : {}),
    // If you ever see proxy/secure cookies issues behind Render/Cloudflare, try enabling:
    // proxy: true,
  };
};