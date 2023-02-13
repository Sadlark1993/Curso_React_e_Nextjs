import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
