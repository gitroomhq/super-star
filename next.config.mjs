/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['user-images.githubusercontent.com', 'avatars.githubusercontent.com', 'beehiiv-images-production.s3.amazonaws.com']
  },
  env: {
    PAYMENT_PUBLIC_KEY: process.env.PAYMENT_PUBLIC_KEY,
    G_TAG_ANALYTICS: process.env.G_TAG_ANALYTICS,
    COURSE_NAME: process.env.COURSE_NAME,
    CURRENCY: process.env.CURRENCY,
    PRICE: process.env.PRICE,
    FACEBOOK_PIXEL: process.env.FACEBOOK_PIXEL,
    LINKEDIN_PIXEL: process.env.LINKEDIN_PIXEL,
    REWARDFUL_ID: process.env.REWARDFUL_ID,
    TWITTER_PIXEL: process.env.TWITTER_PIXEL,
    TWITTER_PURCHASE_ID: process.env.TWITTER_PURCHASE_ID,
    TWITTER_INITIATE_CHECKOUT_ID: process.env.TWITTER_INITIATE_CHECKOUT_ID,
    SEGMENT_ID: process.env.SEGMENT_ID,
    BLOG_SERVICE: process.env.BLOG_SERVICE,
    REDDIT_PIXEL: process.env.REDDIT_PIXEL,
    GITHUB_REPO: process.env.GITHUB_REPO,
  },
  redirects() {
    if (process?.env?.BLOG_SERVICE === 'wordpress') {
      return [
        {
          source: '/wp-admin',
          destination: process.env.BLOG_PATH + '/wp-admin',
          permanent: false,
        }
      ]
    }
    return [];
  },
  rewrites() {
    if (process?.env?.BLOG_SERVICE === 'wordpress') {
      return [
        {
          source: '/wp-content/:path*',
          destination: process.env.BLOG_PATH + '/wp-content/:path*'
        }
      ]
    }
    return [];
  }
};

export default nextConfig;
