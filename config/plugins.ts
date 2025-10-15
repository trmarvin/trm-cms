export default ({ env }) => ({
  'users-permissions': {
    config: {
      // Reads JWT from env; you can use either name
      jwtSecret: env('JWT_SECRET', env('USERS_PERMISSIONS_JWT_SECRET')),
    },
    graphql: {
      enabled: true,
      config: {
        // Query limits
        defaultLimit: 25,
        maxLimit: 100,
        // Enable SDL/Playground in dev only
        apolloServer: {
          introspection: process.env.NODE_ENV !== 'production',
          playground: process.env.NODE_ENV !== 'production',
        },
        // Optional: enable shadow CRUD for faster prototyping
        // shadowCRUD: true,
      },
    },

    // Uploads (Cloudinary)
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: process.env.CLOUDINARY_NAME,
          api_key: process.env.CLOUDINARY_KEY,
          api_secret: process.env.CLOUDINARY_SECRET,
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },

    // Internationalization (turn on if/when needed)
    // i18n: {
    //   enabled: true,
    //   config: {
    //     defaultLocale: 'en',
    //     // locales: ['en', 'he'],
    //   },
    // },

    // CKEditor 5 (optional, for richer longform editing)
    // ckeditor: {
    //   enabled: true,
    //   config: {
    //     plugin: {
          // Keep it simple; you can customize the toolbar later
          // https://www.npmjs.com/package/@strapi/plugin-ckeditor5
        },
      },
    },
  } as const;

  },
});