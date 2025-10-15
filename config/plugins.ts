// config/plugins.ts
export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', env('USERS_PERMISSIONS_JWT_SECRET')),
    },
  },

  graphql: {
    enabled: true,
    config: {
      defaultLimit: 25,
      maxLimit: 100,
      apolloServer: {
        introspection: env('NODE_ENV') !== 'production',
        playground: env('NODE_ENV') !== 'production',
      },
    },
  },

  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
        // 👇 Some provider builds read default params from here:
        params: {
          folder: 'trm-cms/uploads',
          use_filename: true,
          unique_filename: true,
          overwrite: false,
        },
      },
      actionOptions: {
        // 👇 Others read them from the actionOptions call:
        upload: {
          folder: 'trm-cms/uploads',
          use_filename: true,
          unique_filename: true,
          overwrite: false,
        },
        delete: {},
      },
    },
  },
});
