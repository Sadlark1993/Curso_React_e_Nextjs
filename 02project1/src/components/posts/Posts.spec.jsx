/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react"
import { Posts } from "."

const propsMock = [
  {
    id: 1,
    title: 'Title 1',
    body: 'Body 1. This is a body.',
    photo: 'img/photo1.png'
  },
  {
    id: 2,
    title: 'Title 2',
    body: 'Body 2. This is a body.',
    photo: 'img/photo2.png'
  },
  {
    id: 3,
    title: 'Title 3',
    body: 'Body 3. This is a body.',
    photo: 'img/photo3.png'
  },
]

describe('<Posts/>', ()=>{
  it('should render Posts', ()=>{
    //const {debug} =  render(<Posts posts={propsMock}/>);
    //debug();

    render(<Posts posts={propsMock} />);
    expect(screen.getAllByRole('heading', {name: /title/i})).toHaveLength(3);
    expect(screen.getAllByRole('img', {name: /title/i})).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);

    expect(screen.getByRole('img', {name: /title 3/i})).toHaveAttribute('src', 'img/photo3.png');
  });

  it('should match snapshot', ()=>{
    const {container} = render(<Posts posts={propsMock}/>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render Posts', ()=>{
    render(<Posts />);
    expect(screen.queryByRole('heading', {name: /title/i})).not.toBeInTheDocument();
  });
})