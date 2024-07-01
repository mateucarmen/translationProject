import { createContext, useState } from "react";
// En este contexto deberíamos tener el contenido en todos los idiomas que queremos
// Normalmente, 1 función para cada lenguaje, para eso importamos los json que hemos creado
// Los importamos a través de una variable, donde se guarda el objeto que está en el json
import esMessages from "../lang/es.json";
import enMessages from "../lang/en.json";
// importamos la dependencia intlPrvider para proveer a la aplicación del lenguaje
// así sabe qué lenguaje tiene que utilizar y cuál es el contenido que vamos a distribuir en toda la aplicación
import { IntlProvider } from "react-intl"; 
// lo metemos dentro del contexto que retornamos 


export const TranslationContext = createContext();

// Creamos una variable (un objeto) que contiene toda la info del lenguaje
// En él metemos los dos idiomas
const messageContext = {
    es: esMessages,
    en: enMessages,
};

// Estructura para proveer de información a toda la aplicación (Provider)
// En este caso no va a ser un Hook personalizado, ya que el contexto no va a modificarse, sino que va a tener dos posibles valores (es y en)

const TranslationProvider = ({children}) => {
    // una v.estado para que el usuario pueda cambiar el idioma de la web
    const [locale, setLocale] = useState("es");
    // otra v.estado para cambiar el contenido JSON según el idioma seleccionado
    const [messages, setMessages] = useState(messageContext.es);

    const changeLocale = (newLanguage) => {
        setLocale(newLanguage);
        setMessages(messageContext[newLanguage]); 
        // cuando no sabemos que propiedad vamos a pasar del objeto, no podmeos usar la sintaxis messageContext.es/.en
        // la forma que tenemos de hacerlo es con corchetes
        // le pasamos la propiedad newLanguage (que estratégicamente, tiene el mismo valor que las propiedades del objeto messageContext)
    };

    return (
        <TranslationContext.Provider value={{changeLocale, locale}}>
            {/* Siempre recibe estas props, por eso hemos llamado así a las variables de estado, para que coincidan */}
            <IntlProvider locale={locale} messages={messages}>
            {children} {/* es como <App />, porque está contenida en TranslationProvider en main.jsx*/}
            </IntlProvider> {/* Primer nivel, datos del cambio de idioma */}
        </TranslationContext.Provider> /* Otro nivel, datos del contexto */
    );
};

export default TranslationProvider;