import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {getCharacters} from "../../actions";
import Spinner from "../Spinner";

import "./Characters.css";

function Characters(props) {
  
  const [query, setQuery] = useState('');


  useEffect(()=>{
    async function fetchData(query){
      await props.getCharacters(query)
    }
    fetchData(query)
  },[query])
  /*
    PISTA:
    La dirección de donde vamos a tomar los datos es
    
    https://www.breakingbadapi.com/api/characters?name=

    Notesé que hay una query en la dirección. Lo que seguirá a esa query será un string 
    con un nombre o un apellido, y en base a eso la api realizará el filtrado.
    En caso de no poner nada en la query, la api traerá a todos los personajes.
  */

  const handleChange = (q) => {
    setQuery(q);
  } 
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="Characters">
      <h1>List of Characters</h1>
      
      <section>
        <form className="form-control" onSubmit={(e)=>handleSubmit(e)}>
          <input
          type="text"
          placeholder="Search"
          onChange={(e)=>handleChange(e.target.value)}/>
        </form>
      </section>
      
        
      

      <ul className="Characters__list">
        {/*El loading le va a dar un efecto de carga hasta que la peticion de la API llegue, no tocar!.*/}
        {
        props.characters ? 
          props.characters.map((c) => 
          <li key={c.char_id}>
            <Link to={`/characters/${c.char_id}`}>
              {c.name}
            </Link>
          </li>
          ) 
        :  <Spinner /> 
          
      
        }
      </ul>
    </div>
  );
}


function mapStateToProps(state){
  return {
    ...state
  }
}


//Actions
function mapDispatchToProps(dispatch) {
  return {
    getCharacters: (query) => dispatch(getCharacters(query))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Characters);

