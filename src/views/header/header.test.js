import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './Header';

afterEach(cleanup);

// EXAMPLE WITH ENZYME/JEST
describe('Generate Snapshot', () => {
    it('renders the Header component', () => {
        const container = render(<Header />);
        expect(container).toMatchSnapshot();
    });
});

test('Header Component - Render and Check values', () => {
    const { getByTestId, getByText } = render(<Header />);

    expect(getByTestId('header-cont')).toHaveTextContent('MARVEL');
});
