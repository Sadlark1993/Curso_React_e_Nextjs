import P from 'prop-types';

export default function Home({ name }) {
  return <h1>{name}</h1>;
}

export const getStaticProps = async () => {
  console.log('executou');
  return {
    props: {
      name: 'Junior',
    },
  };
};

Home.propTypes = {
  name: P.string,
};
