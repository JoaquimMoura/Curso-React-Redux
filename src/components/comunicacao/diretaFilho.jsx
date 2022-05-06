const DiretaFilho = (parans) => {

    return (
        <div>
            <span>{parans.nome} </span>
            <span><strong>{parans.idade} </strong></span>
            <span>{parans.nerd ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    )

}

export default DiretaFilho;