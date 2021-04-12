import React, { useEffect } from "react";
import logo from "../../img/logo.png";
import "./Home.css";
import { addQuote } from "../../actions";

import Spinner from "../Spinner";

import { useSelector, useDispatch } from "react-redux";

function Home() {
  // useSelector para traerse el estado.
  const { quote, loading } = useSelector((state) => state);

  // También se puede usar esta alternativa
  // useSelector((state)=>state.quote)

  // useDispatch para llamar a las acciones
  const dispatch = useDispatch();

  useEffect(() => {
    //Forma de despachar la acción
    dispatch(addQuote());
    //console.log(props.quote);
  }, []);

  return (
    <div className="Home">
      <img src={logo} alt="" className="Home__logo" />
      <hr />
      {!loading ? (
        <div>
          <h2>"{quote.quote}"</h2>
          <h3>{quote.author}</h3>
          <p>From: {quote.series}</p>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

//Devolviendo un objeto, cuyo parámetro quote va a ser igual al quote del estado global
//Con connect ese objeto devuelto pasa a formar parte de las props

export default Home;
