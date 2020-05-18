function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web');
}

function isWebpack(caller) {
  return Boolean(caller && caller.name === 'babel-loader');
}

module.exports = api => {
  const web = api.caller(isWebTarget);
  const webpack = api.caller(isWebpack);
  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          useBuiltIns: web ? 'entry' : undefined,
          targets: !web ? { node: 'current' } : undefined,
          modules: webpack ? false : 'commonjs',
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      '@loadable/babel-plugin',
      '@babel/plugin-transform-runtime',
      [
        'babel-plugin-styled-components',{
          "ssr": true 
        }
      ],
      [ 
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ts','.tsx'],
          alias:{
            'src': './src',
            '@components': './src/components',
            '@pages': './src/pages',
            '@store': './src/store',
            '@reducers': './src/store/reducers',
            '@theme': './src/theme',
            '@util': './src/util',
            '@modules': './src/modules',
            '@apis': './src/apis',
            '@models': './src/models'
          }
        }
      ]
    ]
  }
}