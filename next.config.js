// is needed for git hub pages hosting
const ASSET_PREFIX = process.env.NODE_ENV === "production" ? "" : "";

module.exports = {
  assetPrefix: ASSET_PREFIX,
  publicRuntimeConfig: {
    assetPrefix: ASSET_PREFIX
  }
};
