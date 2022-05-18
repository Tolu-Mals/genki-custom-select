import React from 'react';
import { ThemeProvider } from '@chakra-ui/react';
import theme from '../src/theme.ts';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};