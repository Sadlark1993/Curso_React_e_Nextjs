import { NavBar } from '.';
import links from './mock';

export default {
  title: 'NavBar',
  component: NavBar,
  args: {
    links: links,
  },
  argTypes: {
    links: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavBar {...args} />
    </div>
  );
};
