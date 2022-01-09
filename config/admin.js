module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'db830a68f2031a9c255cd192c8f4056d'),
  },
});
