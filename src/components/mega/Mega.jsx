import { useState } from "react";
import "./Mega.css"

const Mega = (props) => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, array) :
            aleatorio;
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0).reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, []).sort((n1, n2) => n1 - n2)
        return numeros;

    }

    const initQtde = props.qtde || 6;
    const [qtde, setQtde] = useState(initQtde);
    const numerosIniciais = gerarNumeros(qtde);
    const [numeros, setNumeros] = useState(numerosIniciais);

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qtde de Numeros</label>
                <input
                    min={6}
                    max={17}
                    type="number"
                    value={qtde}
                    onChange={(e) => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                    }} />
            </div>
            <button variant="primary" onClick={_ => setNumeros(gerarNumeros(qtde))}>
                Gerar Numeros
            </button>
        </div>
    )

}

export default Mega;