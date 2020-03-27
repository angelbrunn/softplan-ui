import React from 'react';
import { useSelector } from 'react-redux';
import { ListItem } from '../listItem/ListItem';

export const List = () => {
    const storeCharacter = useSelector(state => state.characters);

    return (
        <div className="List-Conteiner">
            {storeCharacter[0].character.map((comic, index) => (
                <ListItem data-testid="list-item" comic={comic} key={index} />
            ))}
        </div>
    );
};
