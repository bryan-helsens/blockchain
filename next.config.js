module.exports = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['s2.coinmarketcap.com', 's3.coinmarketcap.com', 'encrypted-tbn0.gstatic.com', 'assets.coingecko.com', 'www.coingecko.com']
  }
}
