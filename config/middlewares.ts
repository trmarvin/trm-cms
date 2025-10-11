export default [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',

  // must run BEFORE session:
  { name: 'global::force-https' },

  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
