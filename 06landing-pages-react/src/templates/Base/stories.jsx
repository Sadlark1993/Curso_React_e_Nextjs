import { Base } from '.';
import mock from './mock';
import gridMock from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';

export default {
  title: 'Templates/Base',
  component: Base,
  args: {
    children: (
      <>
        <GridText {...gridMock} background />
        <GridText {...gridMock} />
        <GridText {...gridMock} background />
        <GridText {...gridMock} />
        <GridText {...gridMock} background />
      </>
    ),
    ...mock,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
