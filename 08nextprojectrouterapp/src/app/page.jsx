'use client';
//import { ThemeProvider } from 'styled-components';

/* import App from '../templates/App';
import Home from '../templates/Home'; */
import { theme } from '../styles/themes';
import { mapData } from '../api/map-data';

export default function Index() {
  const data = getProps();
  console.log(data);
  return <h1>{data.title}</h1>;
}

export const getProps = async () => {
  const raw = await fetch('http://localhost:1337/api/pages?slug=&populate=deep');
  const obj = await raw.json();
  const data = await mapData(obj)[0];
  return await data;
};
