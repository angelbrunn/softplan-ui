import React, { useState, useEffect } from 'react';

export const Modal = props => {
    const { className, modalRef, metaData } = props;
    const [series, setSeries] = useState([]);
    let lengthSeries = 0;
    let partSeries = [];

    useEffect(() => {
        lengthSeries = metaData.series.items.length;
        setSeries(metaData.series.items);
    }, []);

    return (
        <div ref={modalRef} className={`${className} modal`}>
            <div className="Modal-Conteiner">
                <div className="form-group">
                    <div className="Content">
                        <label className="Title" data-testid="modal-title">
                            The {metaData.name} hero series are:
                        </label>
                        <select
                            multiple
                            size={series.length < 10 ? 5 : 10}
                            className="form-control series"
                        >
                            {series.map((serie, index) => (
                                <option key={index} className="OptionName">
                                    {serie.name}
                                </option>
                            ))}
                        </select>
                        <div
                            className="Hero-Description"
                            data-testid="modal-desc"
                        >
                            {metaData.description ? (
                                metaData.description
                            ) : (
                                <div>
                                    Not description for this hero, sorry man!!
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="Hero-Helper">
                        {' '}
                        click anywhere on the modal to close.{' '}
                    </div>
                </div>
            </div>
        </div>
    );
};
