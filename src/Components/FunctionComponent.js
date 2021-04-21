import React from 'react';

const FunctionComponent = (props) => {

    setInterval(() => {
        document.querySelector(".reloj").innerHTML = `<h2>Son las ${new Date().toLocaleTimeString()}</h2>`
    }, 1000);

    return (
        <section>
            <h1>Soy un componente funcional {props.name}</h1>
            <div className="reloj">

            </div>
        </section>
    );
}

export default FunctionComponent;
