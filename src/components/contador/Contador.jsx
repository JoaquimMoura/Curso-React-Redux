import { Component } from "react";
import "./Contador.css"
class Contador extends Component {

    state = {
        numero: this.props.valorInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        });
    }

    render() {
        return (
            <div>
                <h2>Contador...</h2>
                <h3>{this.state.numero}</h3>
                <label htmlFor="passoInput">Passo: </label>
                <div className="Contador">
                    <input
                        id="passoInput"
                        type="number"
                        value={this.state.passo}
                        onChange={this.setPasso}>

                    </input>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }


}

export default Contador;