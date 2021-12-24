import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
//import Header from '/resty/src/components/header/header.js';
import Header from '/Users/veebs/Documents/CodeFellows/401/resty/src/components/header/header.js';

describe("Header", () => {

  // with getByText
  it('should render same text passed into title prop with getByText', () => {
    render(<Header title={"RESTy"} />);
    const h1Element = screen.getByText(/RESTy/i);
    expect(h1Element).toBeInTheDocument();
  });

  // it('')

})