import { render, fireEvent } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import App from './App';

it('renders without crashing', () => {
  render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
  );
});

it("matches snapshot", () => {
  const {asFragment} = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  expect(asFragment()).toMatchSnapshot();
})

it('works when you click a navbar link', () => {
  const {queryByText, queryAllByText} = render((
    <MemoryRouter>
    <App />
  </MemoryRouter>
  ))

  expect(queryByText('Home')).toBeInTheDocument();
  const link = queryAllByText('Whiskey')
  fireEvent.click(link[0])
  expect(queryByText('Whiskey loves eating popcorn.')).toBeInTheDocument()
})

it('works when you click on the card link', () => {
  const {queryByText, queryAllByText} = render((
    <MemoryRouter>
    <App />
  </MemoryRouter>
  ))

  expect(queryByText('Home')).toBeInTheDocument();
  const link = queryAllByText('Duke')
  fireEvent.click(link[1])
  expect(queryByText('Duke believes that ball is life.')).toBeInTheDocument()
})

it('redirects to /dogs if url is invalid', () => {
  const history = createMemoryHistory()
  history.push('/dogs/aoignweiog')
  const {queryByText} = render((
    <Router history={history}>
    <App />
  </Router>
  ))

  expect(queryByText('Go Back')).not.toBeInTheDocument();
})