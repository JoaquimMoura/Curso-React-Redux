import "./Card.css";

const Card = (params) => {

    const style = {
        backgroundColor: params.color  || '#F00',
        borderColor: params.color || '#F00'
    }

    return (
        <div className="Card" style={style}>
            <div className="Title">  {params.titulo} </div>
            <div className="Content">
                {params.children}
            </div>
        </div>
    );

}

export default Card;