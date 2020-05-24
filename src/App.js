import React, { useState } from "react";
import Header from "./componentes/Header";
import styled from "@emotion/styled";
import Formulario from "./componentes/Formulario";
import Resumen from "./componentes/Resumen";
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion:0,
    datos:{
      marca: "",
      year: "",
      plan: "",
    }
  });

  const [cargando,guardarCargando] = useState(false);

  const {datos,cotizacion} = resumen;
  return (
    <Contenedor> 
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario guardarCargando={guardarCargando} guardarResumen={guardarResumen} />
      
        {cargando ?  <Spinner />:null }
        <Resumen datos={datos} />
        {
          cargando ? null:  <Resultado cotizacion={cotizacion} />
        }
       
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
