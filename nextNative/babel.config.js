// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.dev/guides/using-nextjs/

module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: ['react-native-reanimated/plugin'],
    };
  };
  