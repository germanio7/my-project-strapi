
module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendmail', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        logger: {
          debug: console.log,
          info: console.info,
          warn: console.warn,
          error: console.error
        },
        silent: false,
        devPort: 2525, // Default: False
        devHost: '127.0.0.1', // Default: localhost
        smtpPort: 2525, // Default: 25
        smtpHost: '127.0.0.1'
      },
      settings: {
        // from: 'no-reply@yourdomain.com',
        // to: 'test@qq.com, test@sohu.com, test@163.com ',
        // subject: 'test sendmail',
        // html: 'Mail of test sendmail ',
      },
    },
  },
});