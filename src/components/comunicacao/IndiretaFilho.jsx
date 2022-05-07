
const IndiretaFilho = (parans) => {

    const cb = parans.quandoClicar;

    return (
        <div>
            <div>Filho</div>
            <button onClick={e => cb('Joaquim', 124, true)}>
                Fornecer informacaoe
            </button>
        </div>
    )

}

export default IndiretaFilho;