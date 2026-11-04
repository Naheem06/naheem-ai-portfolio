// Keep public assets compatible with root and subdirectory deployments.
export const assetUrl = (path) =>
  `${process.env.PUBLIC_URL || ""}/${path.startsWith("/") ? path.slice(1) : path}`;
