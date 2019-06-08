import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const getAssetsPrefix = () => {
  return publicRuntimeConfig.assetPrefix;
};
