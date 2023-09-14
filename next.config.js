/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["172.16.50.206", "khoinguonsangtao.vn", "media.istockphoto.com" ,"vanhoadoisong.vn", "c4.wallpaperflare.com", "digital-dialogues.net"],
  },
}
module.exports = nextConfig
