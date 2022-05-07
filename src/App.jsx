import './App.css'

import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParamentro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';
import Card from './components/layout/Card';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';

const App = () => (

    <div className='App'>

        <h1>Fundamentos React</h1>

        <div className='Cards'>

            <Card titulo="#010 - Comunicacao Indireta" color="#8BAD39">
                <IndiretaPai ></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicacao Direta" color="#59323C">
                <DiretaPai />
            </Card>

            <Card titulo="#08 - Renderizacao Condicional" color="#982395">
                <ParOuImpar numero={21} />
                <UsuarioInfo usuario={{ nome: 'Fernando', email: 'fer@nando.com' }} />
            </Card>

            <Card titulo="#07 - Desafio Repeticao" color="#FF432E">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 - Repeticao" color="#FF4C65">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobreNome="de Castro" >
                    <FamiliaMembro nome="Rodrigo" />
                    <FamiliaMembro nome="Joaquim" />
                    <FamiliaMembro nome="Priscila" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
                <Aleatorio max={60} min={1} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parametro" color="#E8B71A">
                <ComParamentro
                    titulo="Situacao do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}></ComParamentro>
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro />
            </Card>
        </div>
    </div>
);

export default App;