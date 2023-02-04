//inheritance of styles
import { Children, cloneElement } from 'react';

const s = {
  //atributes that will be inserted in the elements.
  style: {
    margin: '10px',
    fontSize: '1,8em',
  },
};

const Parent = ({ children }) => {
  return Children.map(children, (child) => {
    const newChild = cloneElement(child, { ...s, data_number: 25 });
    return newChild;
  });
};

export const App = () => {
  return (
    <Parent>
      <p>First Element</p>
      <p>Second Element</p>
    </Parent>
  );
};
