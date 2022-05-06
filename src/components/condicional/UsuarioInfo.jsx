import If, { Else } from './If'

const UsuarioInfo = (params) => {

    console.log(params);

    const usuario = params.usuario || {}

    return (
        <div>
            <If obj={usuario && usuario.nome} >
                Seja bem Vindo <strong>{usuario.nome}</strong><br />
                <Else>
                    seu E-mail é:  <strong>{usuario.email}</strong>
                </Else>
            </If>
        </div>
    );

}

export default UsuarioInfo;