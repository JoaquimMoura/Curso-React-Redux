import { useState } from "react";
import "./Input.css"

const Input = (parans) => {

    const [valor, setValor] = useState('Inicial');

    function quandoClicar(e) {
        setValor(e.target.value);
    }

    return (
        <div className="Input">
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <h2> {valor} </h2>
                <input value={valor} onChange={quandoClicar} />
                <input value={valor} readOnly />
            </div>
        </div>
    )

}

export default Input;