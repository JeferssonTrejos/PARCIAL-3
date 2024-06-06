import React from 'react';
import VideoSection from './VideoSection';
import ModuleCard from './ModuleCard';
import img from '../assets/img-showall.png';
import Header from './Header';

const MainContent = ({ GetOneModule, selectModule, modules, action, changeAction, cap }) => {
    switch (action) {
        case 1:
            return (
                <main className="main">
                    <Header />
                    <section className="main-view">
                        <div className="main-cards">
                            {modules.map((module, index) =>
                                module.temas.map((theme, themeIndex) => {
                                    // console.log(module._id + ' = ' + themeIndex);
                                    const id = module._id;
                                    return (
                                        <ModuleCard
                                            key={themeIndex}
                                            theme={theme}
                                            changeAction={changeAction}
                                            ID={id}
                                            page={themeIndex}
                                            GetOneModule={GetOneModule}
                                        />
                                    )
                                })
                            )}
                        </div>

                    </section>
                </main>
            )
        case 2:
            return (
                <main className="main">
                    <Header />
                    <h3 className="main-coursename">{selectModule.titulo}</h3>
                    <section className="main-view">
                        <div className="main-cards">
                            {selectModule.temas.map((theme, themeIndex) => {
                                const id = selectModule._id;

                                return (
                                    <ModuleCard
                                        key={themeIndex}
                                        theme={theme}
                                        changeAction={changeAction}
                                        ID={id}
                                        page={themeIndex}
                                        GetOneModule={GetOneModule}
                                    />
                                )
                            })}

                            <div className="main-cards-card drop-shadow" onClick={() => { GetOneModule(selectModule._id, 3, null) }} >
                                <img className="card-img" src={img} alt="image" />
                                <span className="card-title">Ver todo</span>
                            </div>
                        </div>
                    </section>
                </main>
            );

        case 3:
            return (
                <main className="main">
                    <Header />
                    <h3 className="main-coursename">{selectModule.titulo || ""}</h3>
                    <section className="main-view">{
                        selectModule.temas.map((theme, themeIndex) => {
                            if (cap != null) {
                                if (cap == themeIndex) {
                                    return (
                                        <VideoSection theme={theme} />
                                    )
                                }
                            } else {
                                return (
                                    <VideoSection theme={theme} />
                                )
                            }
                        })
                    }
                    </section>
                </main>
            );

        default:
            break;
    }
};

export default MainContent;
