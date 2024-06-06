import React from 'react';

const ModuleCard = ({ theme, changeAction, ID, page, GetOneModule }) => {
    const firstVideo = theme.urlvideos[0].url;
    const banner = firstVideo.split('=')[1];

    return (
        <div className="main-cards-card drop-shadow" onClick={() => { GetOneModule(ID, 3, page) }} >
            <img className="card-img" src={`https://i.ytimg.com/vi/${banner}/hqdefault.jpg`} alt="image" />
            <span className="card-title">{theme.nombre}</span>
        </div>
    );
};

export default ModuleCard;
