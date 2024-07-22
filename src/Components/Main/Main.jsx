/*Este archivo Main.jsx contiene la etiqueta <main/> */
/*Importo el archivo css*/ 

import "./Main.css";
import { Hero } from "../Hero/Hero.jsx";
import { Servicios, SobreMi} from "../Section/Section.jsx";
import { Resumen } from "../Resumen/Resumen.jsx";


const Main = () => {
    return (
        <div>
            <Hero />
            <SobreMi/>
            <Servicios/>
            <Resumen/>
        </div>
    );
};

export { Main };
