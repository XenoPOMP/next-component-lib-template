import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';

import SampleComponent from './SampleComponent';

describe('Sample Vitest test', () => {
  test('It works!', () => {
    expect(() => render(<SampleComponent />)).not.toThrow();
  });
});
