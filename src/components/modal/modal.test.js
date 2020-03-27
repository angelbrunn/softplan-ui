import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Modal } from './Modal';

afterEach(cleanup);

const modalMock = {
    id: 1011334,
    name: '3-D Man',
    description: 'Test Desc',
    modified: '2014-04-29T14:18:17-0400',
    thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        extension: 'jpg'
    },
    series: {
        available: 3,
        collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/series',
        items: [
            {
                resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
                name: 'Avengers: The Initiative (2007 - 2010)'
            },
            {
                resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
                name: 'Deadpool (1997 - 2002)'
            }
        ]
    }
};

// EXAMPLE WITH ENZYME/JEST
describe('Generate Snapshot', () => {
    it('renders the Modal component', () => {
        const container = render(<Modal metaData={modalMock} />);
        expect(container).toMatchSnapshot();
    });
});

// EXAMPLE WITH REACT TEST LIBRARY
test('Modal Component - Render and Check values', () => {
    const { getByTestId, getByText } = render(<Modal metaData={modalMock} />);

    expect(getByTestId('modal-title')).toHaveTextContent('3-D Man');
    expect(getByTestId('modal-desc')).toHaveTextContent('Test Desc');
});
