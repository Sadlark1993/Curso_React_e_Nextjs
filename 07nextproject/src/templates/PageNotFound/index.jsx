import PropTypes from 'prop-types';
import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html="<p>The page that you are searching for does't exist. <a href='#'>Click here</a> to go back to home page.</p>"
    />
  );
};
