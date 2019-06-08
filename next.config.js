const ASSET_PREFIX =
  process.env.NODE_ENV === "production" ? "/visatour-komi" : "";

module.exports = {
  assetPrefix: ASSET_PREFIX,
  publicRuntimeConfig: {
    assetPrefix: ASSET_PREFIX
  }
};
