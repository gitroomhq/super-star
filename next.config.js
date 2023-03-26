/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PAYMENT_PUBLIC_KEY: process.env.PAYMENT_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
