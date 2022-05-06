export default function ComParamentro(params) {

    return (
        <div>
            <h2>{params.titulo}</h2>
            <p>
                <strong> {params.aluno} </strong>
                tem a  nota
                <strong> {params.nota} </strong>
            </p>
        </div>
    );
}