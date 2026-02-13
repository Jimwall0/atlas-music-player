import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SongTitle from '../components/SongTitle';

describe('SongTitle', () => {
  it('renders with title and artist', () => {
    const { container } = render(<SongTitle title="Song 1" artist="Artist 1" />);
    expect(container).toMatchSnapshot();
  });

  it('renders with missing artist', () => {
    const { container } = render(<SongTitle title="Song 1" artist="" />);
    expect(container).toMatchSnapshot();
  });

  it('renders with missing title', () => {
    const { container } = render(<SongTitle title="" artist="Artist 1" />);
    expect(container).toMatchSnapshot();
  });
});
