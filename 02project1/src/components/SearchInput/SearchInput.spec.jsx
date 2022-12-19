import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { SearchInput } from "."




describe('<SearchInput />', ()=>{
  it('should input value to be "testing..."', ()=>{
    const fn = jest.fn();
    render(<SearchInput handleIChange={fn} searchValue={'testing...'}/>);

    const screenConst = screen.getByPlaceholderText(/search/i);
    
    expect(screenConst).toBeInTheDocument();
    expect(screenConst.value).toBe('testing...');
  });

  it('should call handleChange function on each key pressed', ()=>{
    const fn = jest.fn();
    render(<SearchInput handleIChange={fn} searchValue={'a random value'}/>);

    const screenConst = screen.getByPlaceholderText(/search/i);
    const value = 'a random value';
    userEvent.type(screenConst, value);

    expect(screenConst.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);

  });

  it('should match snapshot', ()=>{
    const fn = jest.fn();
    render(<SearchInput handleIChange={fn} searchValue={'testing...'}/>);
    const screenConst = screen.getByPlaceholderText(/search/i);

    expect(screenConst).toMatchSnapshot();
  })
})