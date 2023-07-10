import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'The text is dark.',
    uppercase: false,
  },
  argTypes: {
    children: { type: 'string' },
    uppercase: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'The text is light.',
  darkTitle: false,
};
