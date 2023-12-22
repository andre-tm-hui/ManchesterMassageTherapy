/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      }
    ]
  }
};

(nextConfig.webpack = (config, context) => {
  config.module.rules.push({
    loader: '@svgr/webpack',
    options: {
      prettier: false,
      svgo: true,
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: { removeViewBox: false },
            },
          },
        ],
      },
      titleProp: true,
    },
    test: /\.svg$/,
  });

  return config;
}),
  (module.exports = nextConfig);
