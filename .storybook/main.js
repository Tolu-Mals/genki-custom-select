module.exports = {
  stories: ["../src/stories/*.stories.tsx"],
   addons: ["@chakra-ui/storybook-addon"],
  features: {
    emotionAlias: false,
  },
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': '@emotion/react',
          'emotion-theming': '@emotion/react',
        },
      },
    }
  },
};
