import { render, screen } from '@testing-library/react';
import PartitionCount from '../PartitionCount';

describe('PartitionCount component', () => {
  it('renders the Partition Count title', () => {
    render(<PartitionCount results={0} />);
    expect(screen.getByText('Partition Count')).toBeInTheDocument();
  });

  it('displays the partition count', () => {
    render(<PartitionCount results={5} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
