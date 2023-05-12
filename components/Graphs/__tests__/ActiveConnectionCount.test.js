import { render, screen } from '@testing-library/react';
import ActiveConnectionCount from '../ActiveConnectionCount';

describe('ActiveConnectionCount component', () => {
  it('renders the Active Connection Count title', () => {
    render(<ActiveConnectionCount results={0} />);
    expect(screen.getByText('Active Connections')).toBeInTheDocument();
  });

  it('displays the connection count', () => {
    render(<ActiveConnectionCount results={10} />);
    expect(screen.getByText('10')).toBeInTheDocument();
  });
});
