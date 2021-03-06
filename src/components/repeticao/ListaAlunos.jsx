import alunos from '../data/alunos'

function ListaAlunos(params) {

    const listAlunos = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id} {aluno.nome} -- {aluno.nota}
            </li>
        )
    })

    return (
        <div>
            <ul style={{listStyle: `none`}}>{listAlunos}</ul>
        </div>
    );
}

export default ListaAlunos;