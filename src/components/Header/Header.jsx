import React from 'react'
import { FormattedMessage } from 'react-intl'

function Header() {

const user = "Anacleta";

  return (
    <div>
        {/* Es un componente de la dependencia react-intl que hemos instalado */}
        {/* En el id definimos la parte del JSON que se visualiza */}
        {/* El defaultMessage es el que sale por defecto al cargar la página */}
        <h2>
            <FormattedMessage 
            id="app.header" 
            defaultMessage={"Hola mundo"} />
        </h2>

        {/* En el caso de app-user, hay una variable que cambia, el user */}
        {/* Para eso, le añadimos un value */}
        {/* Tenemos que crear una variable para que tenga un valor por defecto */}
        {/* Tenemos que darle el mismo nombre que la variable que hemos puesto en JSON es decir user */}
        <p>
            <FormattedMessage
            id="app.user"
            defaultMessage={"Bienvenido"} 
            values={{user}}/>
        </p>
    </div>
  )
}

export default Header