import { render, screen } from '@testing-library/react';
import App from '/app.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// it('should invoke handleSubmit with correct parameters', () => {
//   const mockFn = jest.fn();
//   render(<RequestForm handleSubmit={mockFn}/>);
//   const input = screen.getByRole('textbox') 
//   let get = screen.getByRole('button', {
//     name: /get/i
//   })
//   let submit = screen.getByRole('button', {
//     name: /submit/i
//   })
//   fireEvent.change(input, {target: {value: 'https://pokeapi.co/api/v2/'}})
//   fireEvent.click(get)
//   fireEvent.click(submit)
//   expect(mockFn).toBeCalledWith("GET", "https://pokeapi.co/api/v2/");
// })