/** @type {import('next').NextConfig} */
const nextConfig = {};

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
