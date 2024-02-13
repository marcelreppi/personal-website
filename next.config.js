const UMAMI_HOST = "https://umami.marcelreppi.com";

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
        destination: `${UMAMI_HOST}/script.js`,
      },
      {
        source: "/api/send",
        destination: `${UMAMI_HOST}/api/send`,
      },
    ];
  },
};
