const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/myportfolio/'
    : '/',
  devServer: {
    host: '192.168.0.101', // Доступ з локальної мережі
    port: 8082, // Порт, який ви використовуєте
    allowedHosts: 'all', // Дозволяє доступ з усіх хостів
  }
});
