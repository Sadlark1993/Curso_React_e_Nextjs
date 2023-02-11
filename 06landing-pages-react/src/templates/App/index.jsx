import { Heading } from '../../components/Heading';
import * as Styled from './styles';

function Home() {
  return (
    // not using the color passed as prop
    <Styled.Wrapper background="#e7f3bc">
      <Heading>Hi, i&apos;m a heading!!</Heading>
    </Styled.Wrapper>
  );
}

export default Home;
