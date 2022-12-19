import { /* fireEvent, */ render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe('<Button />', ()=>{
  it('should render with the text "Load more"', ()=>{
    expect.assertions(1); //to check if the assertions happened 
    render(<Button text={'Load more posts'} />);
    const button = screen.getByRole('button', {name: /load more/i});
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', ()=>{

    //creates a mock function
    const fn = jest.fn();

    render(<Button text="Load more posts" clickEvent={fn} disabled={false} />);
    const button = screen.getByRole('button', {name: /load more/i});

    //it works also
    //fireEvent.click(button);

    //better in some cases.
    userEvent.click(button);

    expect(fn).toBeCalled();
    expect(button).toBeEnabled();
  })

  it('should be disabled when disabled is true', ()=>{
    render(<Button text="Load more posts" disabled={true}/>);
    const button = screen.getByRole('button', {name: /load more/i});

    expect(button).toBeDisabled();
  })
})