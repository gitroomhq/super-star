/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PAYMENT_PUBLIC_KEY: process.env.PAYMENT_PUBLIC_KEY,
    G_TAG_ANALYTICS: process.env.G_TAG_ANALYTICS,
    COURSE_NAME: process.env.COURSE_NAME,
    CURRENCY: process.env.CURRENCY,
    PRICE: process.env.PRICE,
  },
};

module.exports = nextConfig;
