export default ({ env }) => ({
  'users-permissions': {
    config: {
      // Reads JWT from env; you can use either name
      jwtSecret: env('JWT_SECRET', env('USERS_PERMISSIONS_JWT_SECRET')),
    },
  },
});