import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from './Footer';

afterEach(cleanup);

// EXAMPLE WITH ENZYME/JEST
describe('Generate Snapshot', () => {
    it('renders the Footer component', () => {
        const container = render(<Footer />);
        expect(container).toMatchSnapshot();
    });
});

test('Footer Component - Render and Check values', () => {
    const { getByTestId, getByText } = render(<Footer />);

    expect(getByTestId('footer-cont')).toHaveTextContent('SOFTPLAN');
});
