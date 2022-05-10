
const PassoForm = (props) => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <div>
                <input
                    id="passoInput"
                    type="number"
                    value={props.passo}
                    onChange={e => props.setPasso(+e.target.value)}>

                </input>
            </div>
        </div>
    )
}

export default PassoForm;