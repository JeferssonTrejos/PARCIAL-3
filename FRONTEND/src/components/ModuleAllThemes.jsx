import React from 'react';

const ModuleCard = ({ theme, changeAction, ID, page, GetOneModule }) => {
    // const firstVideo = theme.urlvideos[0].url;
    // const banner = firstVideo.split('=')[1];

    // console.log(ID);
    // GetAlert(ID)

    return (
        <div className="main-cards-card drop-shadow" >
            <img className="card-img" src={`https://i.ytimg.com/vi/dfd/hqdefault.jpg`} alt="image" />
            <span className="card-title">VER TODO</span>
        </div>
    );
};

export default ModuleCard;
