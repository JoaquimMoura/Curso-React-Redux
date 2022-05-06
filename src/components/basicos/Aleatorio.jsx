function Aleatorio(params) {

    const { max, min } = params;

    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>Desafio Aleatorio</h2>
            <p>
                <strong> Valor Maximo: {max} </strong><br />
                <strong> Valor Minimo: {min} </strong><br />
                <strong> valor Aleatorio: {aleatorio} </strong>
            </p>
        </div>
    );
}

export default Aleatorio;