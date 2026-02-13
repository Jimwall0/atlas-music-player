import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CoverArt from '../components/CoverArt';

describe('CoverArt', () => {
  it('renders with a valid cover URL', () => {
    const { container } = render(<CoverArt cover="cover.jpg" />);
    expect(container).toMatchSnapshot();
  });

  it('renders with no cover URL', () => {
    const { container } = render(<CoverArt cover={null} />);
    expect(container).toMatchSnapshot();
  });
});
