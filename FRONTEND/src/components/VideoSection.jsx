import React from 'react';


const VideoSection = ({ theme }) => {
    return (
        <div>
            <h2 className='theme-title'>{theme.nombre}</h2>
            <span className='theme-description'>{theme.descripcion}</span>
            <section className="main-view-youtube">
                {theme.urlvideos.map((video, videoIndex) => {
                    const url = video.url.split('=')[1];

                    return (
                        <iframe key={videoIndex} className="iframe-youtube drop-shadow"
                            src={`https://www.youtube.com/embed/${url}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                    );
                })}
            </section>
        </div>

    );
};

export default VideoSection;
