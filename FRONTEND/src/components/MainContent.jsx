import React from 'react';
import VideoSection from './VideoSection';
import ModuleCard from './ModuleCard';
import img from '../assets/hqdefault.jpg';
import Header from './Header';

const MainContent = ({ GetOneModule, selectModule, modules, action, changeAction, cap }) => {
    // cap = cap
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
                                <img className="card-img" src={`https://i.ytimg.com/vi/hqdefault.jpg`} alt="image" />
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



// const MainContent = ({ selectedModule, modules, action, changeAction }) => {
//     switch (action) {
//         case 0:
//             return (
//                 <main className="main">
//                     <Header />
//                     <section className="main-view">
//                         <div className="main-cards">
//                             {modules.map((module, index) =>
//                                 module.temas.map((theme, themeIndex) => {
//                                     // console.log(module._id + ' = ' + themeIndex);
//                                     return (
//                                         <ModuleCard
//                                             key={themeIndex}
//                                             // module={module}
//                                             theme={theme}
//                                             // page={themeIndex}
//                                             changeAction={changeAction}
//                                         />
//                                     )
//                                 })
//                             )}
//                         </div>

//                     </section>
//                 </main>
//             )
//         case 1:
//             return (
//                 <main className="main">
//                     <Header />
//                     <h3 className="main-coursename">{selectedModule.titulo}</h3>
//                     <section className="main-view">
//                         <div className="main-cards">
//                             {selectedModule.temas.map((theme, themeIndex) => {

//                                 return (
//                                     <ModuleCard
//                                         key={themeIndex}
//                                         // module={selectedModule}  
//                                         theme={theme}
//                                         // page={themeIndex}
//                                         changeAction={changeAction}
//                                     />
//                                 )
//                             }
//                             )}
//                         </div>
//                     </section>
//                 </main>
//             );
//         case 2:
//             return (
//                 <main className="main">
//                     <Header />
//                     <h3 className="main-coursename">{selectedModule?.titulo || ""}</h3>
//                     <section className="main-view">
//                         <VideoSection themes={selectedModule.temas} action />
//                     </section>
//                 </main>
//             );
//     }

//     // return (
//     //     <main className="main">
//     //         <Header />
//     //         <h3 className="main-coursename">{selectedModule?.titulo || ""}</h3>
//     //         <section className="main-view">{
//     //             selectedModule ? (
//     //                 // <VideoSection themes={selectedModule.temas} />
//     //                 <div className="main-cards">
//     //                     {selectedModule.temas.map((theme, themeIndex) => {
//     //                         // console.log(themeIndex);
//     //                         return (
//     //                             <ModuleCard key={themeIndex} module={selectedModule} theme={theme} page={themeIndex} />
//     //                         )
//     //                     }
//     //                     )}
//     //                 </div>
//     //             ) : (
//     //                 <div className="main-cards">
//     //                     {modules.map((module, index) =>
//     //                         module.temas.map((theme, themeIndex) => (
//     //                             <ModuleCard key={themeIndex} module={module} theme={theme} page={themeIndex} />
//     //                         ))
//     //                     )}
//     //                 </div>
//     //             )
//     //         }</section>
//     //     </main>
//     // );

// };

export default MainContent;
