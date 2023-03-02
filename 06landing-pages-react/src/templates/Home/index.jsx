import { useEffect, useState } from 'react';
import { Heading } from '../../components/Heading';
import { Base } from '../Base';
import { mockBase } from '../Base/stories';
import * as Styled from './styles';
import { mapData } from '../../api/map-data';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetch('http://localhost:1337/api/pages/?slug=landing-page&populate=deep');
      const dataObj = await data.json();
      const dataPage = mapData(dataObj);
      setData(dataPage[0]);
    };

    load();
  }, []);

  if (data === undefined) return <h1>Error 404: Page not found</h1>;
  if (data && !data.slug) {
    return <h1>Loading...</h1>;
  }

  return <Base {...mockBase} />;
}

export default Home;
