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
      },
      actionOptions: {
        upload: { folder: 'trm-cms/uploads' },
        uploadStream: { folder: 'trm-cms/uploads' }, // 👈 add this
        delete: {},
      },
    },
  },
});