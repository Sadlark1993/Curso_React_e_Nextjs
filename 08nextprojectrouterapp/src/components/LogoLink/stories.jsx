import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'assets/img/logo.svg',
    link: '#',
  },
};

export const LogoImg = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const LogoText = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

LogoText.args = {
  srcImg: '',
};
