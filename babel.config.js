module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '@root',
            rootPathSuffix: 'src',
          },
          {
            rootPathPrefix: '@assets',
            rootPathSuffix: 'src/assets',
          },
          {
            rootPathPrefix: '@i18n',
            rootPathSuffix: 'src/i18n',
          },
          {
            rootPathPrefix: '@redux',
            rootPathSuffix: 'src/redux',
          },
          {
            rootPathPrefix: '@layouts',
            rootPathSuffix: 'src/layouts',
          },
          {
            rootPathPrefix: '@views',
            rootPathSuffix: 'src/views',
          },
          {
            rootPathPrefix: '@services',
            rootPathSuffix: 'src/services',
          },
          {
            rootPathPrefix: '@components',
            rootPathSuffix: 'src/components',
          },
        ],
      },
    ],
  ],
}
