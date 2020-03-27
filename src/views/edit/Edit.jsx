import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastBody from 'react-bootstrap/ToastBody';
import { useSelector, useDispatch } from 'react-redux';
import { updateCharacter } from '../../redux/action/index';

export const Edit = () => {
    const storeCharacter = useSelector(state => state.characters);
    const dispatch = useDispatch();
    const [heroSelected, setHeroSelected] = useState([]);
    const [urlHeroSelected, setUrlHeroSelected] = useState('');
    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);

    useEffect(() => {
        if (heroSelected.length === 0) {
            setUrlHeroSelected(
                storeCharacter[0].character[0].thumbnail.path +
                    '.' +
                    storeCharacter[0].character[0].thumbnail.extension
            );
            setHeroSelected(storeCharacter[0].character[0]);
        }
    }, []);

    const selectedHero = comic => {
        setHeroSelected(comic);
        setUrlHeroSelected(
            comic.thumbnail.path + '.' + comic.thumbnail.extension
        );
    };

    const setName = name => {
        setHeroSelected({
            ...heroSelected,
            name: name
        });
    };

    const setDescription = description => {
        setHeroSelected({
            ...heroSelected,
            description: description
        });
    };

    const editHero = () => {
        let foundIndex = storeCharacter[0].character.findIndex(
            x => x.id === heroSelected.id
        );
        storeCharacter[0].character[foundIndex] = heroSelected;
        dispatch(updateCharacter(storeCharacter[0].character));
        setShow(true);
    };

    return (
        <div className="Edit-Conteiner">
            <div className="Heroes-List">
                <div className="Heroes-Title">HEROES</div>
                <ul className="list-group ListHeroes">
                    {storeCharacter[0].character.map((comic, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => selectedHero(comic)}
                            className="list-group-item list-group-item-action ItemHero"
                        >
                            {comic.name}
                        </button>
                    ))}
                </ul>
            </div>
            <div className="Heroes-Edit">
                <div className="Heroes-Edit-Title">SHOW EDIT HEROE</div>
                <div className="Heroes-Edit-Foto">
                    <img
                        className="ImgHero border border-dark"
                        src={urlHeroSelected}
                    />
                </div>
                <div className="Heroes-Edit-Fields">
                    <label className="LabelName">Name</label>
                    <span>
                        <input
                            className="Name"
                            type="text"
                            value={
                                heroSelected.name === undefined
                                    ? ''
                                    : heroSelected.name
                            }
                            onChange={e => setName(e.target.value)}
                        />
                    </span>
                    <label className="LabelDescription">Description</label>
                    <span>
                        <textarea
                            className="Description"
                            type="text"
                            rows="5"
                            cols="61"
                            value={
                                heroSelected.description === undefined
                                    ? ''
                                    : heroSelected.description
                            }
                            onChange={e => setDescription(e.target.value)}
                        />
                        <span>
                            <Toast
                                className="ToastMenssage"
                                onClose={() => setShow(false)}
                                show={show}
                                delay={1000}
                                autohide
                            >
                                <Toast.Body>Editing was successful!</Toast.Body>
                            </Toast>
                        </span>
                    </span>
                    <button
                        className="Edit"
                        type="button"
                        onClick={() => editHero()}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};
