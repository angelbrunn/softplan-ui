import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import rootReducer from '../../redux/reducers';
import { initialState } from '../../redux/reducers/characterReducer';
import { Edit } from './Edit';

afterEach(cleanup);

initialState.push({
    id: '123',
    character: [
        {
            id: 1011334,
            name: '3-D Man',
            description: '',
            modified: '2014-04-29T14:18:17-0400',
            thumbnail: {
                path:
                    'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                extension: 'jpg'
            },
            series: {
                available: 3,
                collectionURI:
                    'http://gateway.marvel.com/v1/public/characters/1011334/series',
                items: [
                    {
                        resourceURI:
                            'http://gateway.marvel.com/v1/public/series/1945',
                        name: 'Avengers: The Initiative (2007 - 2010)'
                    },
                    {
                        resourceURI:
                            'http://gateway.marvel.com/v1/public/series/2005',
                        name: 'Deadpool (1997 - 2002)'
                    }
                ]
            }
        }
    ]
});

const renderWithRedux = (
    ui,
    { initialState, store = createStore(rootReducer) } = {}
) => {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store
    };
};

// EXAMPLE WITH REACT TEST LIBRARY
test('Edit Component - Can render with redux with defaults', () => {
    const { getByTestId, getByText } = renderWithRedux(<Edit />);
});
