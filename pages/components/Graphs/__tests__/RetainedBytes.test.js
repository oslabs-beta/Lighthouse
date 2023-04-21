import { render, screen } from '@testing-library/react';
import RetainedBytes from '../RetainedBytes';

// Mock the fetch call
global.fetch = require('jest-fetch-mock');

describe('RetainedBytes component', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders the Retained Bytes chart', () => {
    fetch.mockResponseOnce(JSON.stringify({
      data: {
        result: [{}, { value: [0, 100] }]
      }
    }));

    render(<RetainedBytes />);
    expect(screen.getByText('Retained Bytes')).toBeInTheDocument();
  });

  it('fetches and receives data from the API', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      data: {
        result: [{}, { value: [0, 100] }]
      }
    }));

    render(<RetainedBytes />);
    await new Promise(resolve => setTimeout(resolve, 2000));

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('http://34.162.127.11:9090/api/v1/query'));
  });
});
