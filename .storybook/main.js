module.exports = {
  stories: ["../src/stories/*.stories.tsx"],
   addons: ["@chakra-ui/storybook-addon"],
  features: {
    emotionAlias: false,
  },
  typescript: {
    reactDocgen: false,
  },
};
