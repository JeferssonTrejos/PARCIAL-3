import React from 'react';

const Aside = ({ modules, GetOneModule }) => {
    return (
        <aside className="aside drop-shadow">
            <div className="aside-buttons">
                <a href="/" className="button-active">Todos los capitulos</a>
                {modules.map((module, index) => (
                    <button key={module._id} onClick={() => { GetOneModule(module._id,2) }}>
                        Módulo {index + 1}: <br />
                        {module.titulo}
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default Aside;
