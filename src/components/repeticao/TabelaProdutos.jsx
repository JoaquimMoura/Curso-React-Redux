import produtos from '../data/produtos'
import './TabelaProdutos.css'

function TabelaProdutos(params) {

    function getLinhas() {
        return produtos.map((p, i) => {
            return (
                <tr key={p.id}  className={i % 2 == 0 ? 'Par' : 'Impar'}>
                    <td>{p.id}</td>
                    <td>{p.nome}</td>
                    <td>{p.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className='TabelaProdutos'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    );
}

export default TabelaProdutos;