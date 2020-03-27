import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ListItem } from './ListItem';

afterEach(cleanup);

const comic = {
    id: 1011334,
    name: '3-D Man',
    description: '',
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

// EXAMPLE WITH REACT TEST LIBRARY
test('ListItem Component - Render and Check values', () => {
    const { getByTestId, getByText } = render(
        <ListItem comic={comic} key={1} />
    );

    expect(getByTestId('list-item-data')).toHaveTextContent('3-D Man');
    expect(getByTestId('modal-title')).toHaveTextContent(
        'The 3-D Man hero series are:'
    );
});
