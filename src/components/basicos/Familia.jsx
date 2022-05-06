import React, { cloneElement } from "react";

const Familia = (params) => {
    return (

        <div>

            <h2>Primeiro Componente</h2>
            {
                params.children.map((child, i) => {
                    return cloneElement(child, { ...params, key: i });
                })
            }
        </div >
    );
}

export default Familia;