import React, { useState, useEffect } from 'react';

const Hooks2 = (props) => {

    const [ provincias, setProvincias ] = useState([]);

    useEffect(() => {
        fetch("https://apis.datos.gob.ar/georef/api/provincias")
        .then(result => result.json())
        .then(response => { 
            setProvincias(response.provincias)
        })
    }, []); // lo que hace useEfecct es ejecutar el bloque de codigo una vez que se monta el componente (cuando el array esta vacio)

    const [ provinciasID, setProvinciasID ] = useState("");
    const [ localidades, setLocalidades ] = useState("");

    useEffect(() => {
        fetch(`http://apis.datos.gob.ar/georef/api/localidades?provincia=${provinciasID}&campos=id,nombre&max=100`)
        .then(result => result.json())
        .then(response => {
            setLocalidades(response);
        })
    }, [provinciasID]); // este efecto solo se va a ejecuar cuando cambie el estado de provinciaID
    
    const getProvincia = (e) => {
        setProvinciasID(e.target.value);
    };

    return (
        <div>
            <p>
                El valor de user es {props.user.name} {props.user.lastname}
            </p>
            <select onChange={getProvincia} name="provincia">
                {
                    provincias.map(provincia => (
                        <option key={provincia.id} value={provincia.id}>{provincia.nombre}</option>
                    ))
                }
            </select>
            <br/>
            <select>
                <option hidden selected>Elige la localidad</option>
                {
                    localidades.localidades && (localidades.localidades.map(localidad => (
                        <option >{localidad.nombre}</option>
                    )))
                }
            </select>
            <br/>
            <br/>
        </div>
    );
}

export default Hooks2;
