const Botoes = (props) => {
    return (
        <div>
            <button onClick={props.setIncrementar}>+</button>
            <button onClick={props.setDecrementar}>-</button>
        </div>
    )

}

export default Botoes;