module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          config: './src/config',
          types: './src/types',
          navigation: './src/navigation',
          components: './src/components',
          services: './src/services',
          utils: './src/utils',
          constants: './src/constants',
          stores: './src/stores',
          screens: './src/screens',
          theme: './src/theme',
          assets: './src/assets',
          hooks: './src/hooks',
          controllers: './src/controllers',
          tests: './src/tests',
        },
      },
    ],
  ],
};
