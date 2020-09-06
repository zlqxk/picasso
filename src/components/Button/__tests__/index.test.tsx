import React from 'react';
import { render } from '@testing-library/react';
import Button from '../index';
import '@testing-library/jest-dom/extend-expect';

test('button', () => {
  const warpper = render(<Button>test</Button>);
  const ele = warpper.getByText('test');
  expect(ele).toBeInTheDocument()
})