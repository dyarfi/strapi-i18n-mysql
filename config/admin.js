module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '21a990c6dd17258930b3370a5ede229f'),
  },
});
