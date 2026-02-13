import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PlayListItem from '../components/PlayListItem';

describe('PlayListItem', () => {
  const sampleSong = {
    id: '1',
    title: 'Song 1',
    artist: 'Artist 1',
    duration: 180,
  };

  it('renders a normal playlist item', () => {
    const { container } = render(<PlayListItem song={sampleSong} isActive={false} />);
    expect(container).toMatchSnapshot();
  });

  it('renders an active playlist item', () => {
    const { container } = render(<PlayListItem song={sampleSong} isActive={true} />);
    expect(container).toMatchSnapshot();
  });

  it('renders with missing optional props', () => {
    const { container } = render(<PlayListItem song={{ ...sampleSong, artist: '' }} isActive={false} />);
    expect(container).toMatchSnapshot();
  });
});
