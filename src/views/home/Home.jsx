import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from '../../components/list/List';
import { getAllCharacter } from '../../services/characters.service';
import {
    createCharacter,
    updateCharacter,
    deleteCharacter
} from '../../redux/action/index';

export const Home = () => {
    const [hero, setHeroSearch] = useState('');
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const storeCharacter = useSelector(state => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        if (characters.length <= 0) {
            getAllCharacter().then(response => {
                setCharacters(response.data.results);
            });
        }

        if (characters.length > 0) {
            if (isLoading) {
                dispatch(createCharacter(characters));
                setCharacters(characters);
                setIsLoading(false);
            }
        }
    }, [characters, isLoading]);

    const searchHero = () => {
        setIsLoading(true);
        if (hero != '') {
            const found = storeCharacter[0].character.find(
                element => element.name === hero
            );
            dispatch(updateCharacter([found]));
            setIsLoading(false);
        } else {
            dispatch(updateCharacter(characters));
            setIsLoading(false);
        }
    };

    return (
        <div className="Home-Conteiner">
            <div className="Search">
                <input
                    data-testid="Search-Hero-Input"
                    className="Search-Hero-Input"
                    type="text"
                    value={hero}
                    onChange={e => setHeroSearch(e.target.value)}
                    placeholder="put your hero . . .  ( Search empty to get all the heroes !)"
                />
                <button
                    className="Search-Hero-Btn"
                    onClick={() => searchHero()}
                >
                    Show Hero
                </button>
            </div>
            <div className="Characters">
                {isLoading ? (
                    <div
                        className="Characters-Loading"
                        data-testid="Characters-Loading"
                    >
                        Loading . . .
                    </div>
                ) : (
                    <List />
                )}
            </div>
        </div>
    );
};
