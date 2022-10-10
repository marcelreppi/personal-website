module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: "/blubb.js",
        destination: "https://umami.marcelreppi.com/umami.js",
      },
      {
        source: "/api/collect",
        destination: "https://umami.marcelreppi.com/api/collect",
      },
    ];
  },
};
