import React, { useEffect } from "react";
import {emptyCharacterDetail, getCharacterDetail} from "../../actions";
import {connect} from "react-redux";
import Spinner from '../Spinner'
import "./CharacterDetail.css";

function CharacterDetail(props) {
  const id= props.match.params.id; // Alternativa const {id} = useParams();
  //props.getCharacterDetail(props.match.params.id)
  

  useEffect(()=>{
    props.emptyCharacterDetail()
    props.getCharacterDetail(id)    
  },[id])
  /*
    PISTA: podemos obtener lo que llegue por parametros con el hook useParams.
    Que hace useParams? https://reactrouter.com/web/example/url-params
    */

  return (
    <div className="CharacterDetail">
      <h1>Character Details</h1>
      {props.characterDetail ?  
      <div>

        <h3>{props.characterDetail.name}</h3>
        
        <img className="CharacterDetail__Photo" src={props.characterDetail.img} alt="" />

      </div>
      :<Spinner/>
    }
    </div>
  );
}


function mapStateToProps(state){
  return {
    ...state
  }
}


function mapDispatchToProps(dispatch) {
  return {
    emptyCharacterDetail:() => dispatch(emptyCharacterDetail()),
    getCharacterDetail: (id) => dispatch(getCharacterDetail(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CharacterDetail);
