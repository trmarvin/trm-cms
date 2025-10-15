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

  const computedUrl = https ? 'https://localhost:1337' : 'http://localhost:1337';

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env('PUBLIC_URL', computedUrl),
    app: { keys: env.array('APP_KEYS') },
    ...(https ? { https } : {}),
    // proxy: true, // enable if you see secure-cookie issues behind Render/Cloudflare
  };
};