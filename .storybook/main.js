module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/**/*.stories.tsx"],
   addons: ["@chakra-ui/storybook-addon"],
  features: {
    emotionAlias: false,
  },
};
