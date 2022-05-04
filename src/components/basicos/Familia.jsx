import React, { cloneElement } from "react";

const Familia = (params) => {
    return (
        <div>
            {
                params.children.map((child, i) => {
                    return cloneElement(child, { ...params, key: i});
                })
            }
        </div>
    );
}

export default Familia;