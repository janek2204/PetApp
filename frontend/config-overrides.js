import { ProvidePlugin } from "webpack";

export default function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer"),
  };
  config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"];
  config.plugins = [
    ...config.plugins,
    new ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ];
  console.log(config.resolve);
  console.log(config.plugins);

  return config;
}
