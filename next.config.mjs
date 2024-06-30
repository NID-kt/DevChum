/** @type {import('next').NextConfig} */
const nextConfig  = {
  reactStrictMode: true,
  basePath: "/dest",
  output: 'export',
  distDir: 'extensions/dest',

  // webpack: (config, { isServer }) => {
  //   config.experiments = {
  //     asyncWebAssembly: true,
  //   };
  //   config.output.webassemblyModuleFilename =
  //     (isServer ? "../" : "") + "static/wasm/webassembly.wasm";
  //   return config;
  // },
};

export default nextConfig;
