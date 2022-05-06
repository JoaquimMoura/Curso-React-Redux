const ParOuImpar = (params) => {

    const isPar = params.numero % 2 == 0;

    return (
        <div>
            { isPar ? 
                <span>Par</span> :
                <span>impar</span>
            }
        </div>
    );

}

export default ParOuImpar;