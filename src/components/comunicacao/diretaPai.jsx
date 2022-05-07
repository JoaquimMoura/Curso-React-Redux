import DiretaFilho from "./DiretaFilho";

const DiretaPai = (parans) => {

    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd={true}> </DiretaFilho>
            <DiretaFilho nome="Gabriel" idade={20} nerd={false}> </DiretaFilho>
        </div>
    )

}

export default DiretaPai;