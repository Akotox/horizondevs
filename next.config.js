/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'google.com',
            port: '',
            pathname: '/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Ddesktop%2Bwallpaper%2Bhd&psig=AOvVaw02pBUeWQujcGMCgENPVODp&ust=1729234312149000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjGiv3plIkDFQAAAAAdAAAAABAE',
          },
        ],
      },
};

module.exports = nextConfig;
