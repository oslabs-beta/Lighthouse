import { render, screen } from '@testing-library/react';
import ReceivedBytes from '../ReceivedBytes';

// Mock the fetch call
global.fetch = require('jest-fetch-mock');

describe('ReceivedBytes component', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders the Received Bytes chart', () => {
    fetch.mockResponseOnce(JSON.stringify({
      data: {
        result: [{ value: [0, 100] }]
      }
    }));

    render(<ReceivedBytes />);
    expect(screen.getByText('Received Bytes')).toBeInTheDocument();
  });

  it('fetches and receives data from the API', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      data: {
        result: [{ value: [0, 100] }]
      }
    }));

    render(<ReceivedBytes />);
    await new Promise(resolve => setTimeout(resolve, 2000));

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('http://34.162.127.11:9090/api/v1/query'));
  });
});
