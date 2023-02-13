import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';

export const LogoLink = ({ text, srcImg, link }) => {
  return (
    <Heading size="small" uppercase={true}>
      <Styled.LogoStyle href={link}>{srcImg ? <img src={srcImg} alt={text} /> : <span>{text}</span>}</Styled.LogoStyle>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: PropTypes.string.isRequired,
  srcImg: PropTypes.string,
  link: PropTypes.string,
};
