module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel", // <--- INI HARUS DI SINI (PRESETS), BUKAN DI PLUGINS
    ],
    plugins: [
      "react-native-reanimated/plugin", // Ini tetap di plugins
    ],
  };
};