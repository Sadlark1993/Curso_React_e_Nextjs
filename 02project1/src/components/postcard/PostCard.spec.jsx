/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */

import { render, screen } from "@testing-library/react"
import { PostCard } from "."

//crating mock data
const mockData = {
  title: 'A Random Title',
  body: 'Some body... that song from Shrek.',
  photo: './img/img.png',
}


describe('<PostCard />', ()=>{
  it('should render PostCard correctly',()=>{
    //const {debug} = render(<PostCard {...mockData} />);

    //gonna print the output html in terminal.
    //debug();
  
    render(<PostCard {...mockData} />);
    expect(screen.getByRole('img', {name: mockData.title})).toHaveAttribute('src', mockData.photo);
    expect(screen.getByRole('heading', {name: mockData.title})).toBeInTheDocument();
    expect(screen.getByText(/Shrek/i)).toBeInTheDocument();
  });

  it('should match snapshot', ()=>{
    const {container} = render(<PostCard {...mockData} />);
    expect(container.firstChild).toMatchSnapshot();
  })
})