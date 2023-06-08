module.exports = function(api) {
  api.cache(true);
  return {
    plugins: ['@expo/html-elements/babel',
              "nativewind/babel"],
    presets: ['babel-preset-expo'],
  };
};
