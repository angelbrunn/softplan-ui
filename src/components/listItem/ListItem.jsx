import React, { useState } from 'react';
import { Modal } from '../../components/modal/Modal';

export const ListItem = props => {
    const [dropdown, setDropdown] = useState('');

    const showDropdown = () => {
        setDropdown('show');
        document.body.addEventListener('click', closeDropdown);
    };

    const closeDropdown = event => {
        setDropdown('');
        document.body.removeEventListener('click', closeDropdown);
    };

    return (
        <>
            <div
                className="ListItem-Container"
                data-testid="list-item-show"
                data-toggle="tooltip"
                title="Press, show details"
                onClick={showDropdown}
            >
                <div className="comic-thumbnail">
                    <img
                        className="ImgHero"
                        data-testid="list-item-img"
                        src={`${props.comic.thumbnail.path}.${props.comic.thumbnail.extension}`}
                    />
                </div>
                <div className="comic-data" data-testid="list-item-data">
                    <p>{props.comic.name}</p>
                </div>
            </div>
            <Modal className={dropdown} metaData={props.comic} />
        </>
    );
};
