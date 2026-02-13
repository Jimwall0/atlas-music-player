import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VolumeControls from '../components/VolumeControls';

describe('VolumeControls', () => {
  const mockAudioRef = { current: { volume: 0.5 } } as React.RefObject<HTMLAudioElement>;

  it('renders with default volume', () => {
    const { container } = render(<VolumeControls audioRef={mockAudioRef} />);
    expect(container).toMatchSnapshot();
  });

  it('renders when audioRef is null', () => {
    const { container } = render(<VolumeControls audioRef={null} />);
    expect(container).toMatchSnapshot();
  });
});
