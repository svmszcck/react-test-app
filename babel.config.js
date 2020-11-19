module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-react",
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      { targets: { node: "current" }, modules: "commonjs" },
    ],
  ];

  const plugins = [
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
