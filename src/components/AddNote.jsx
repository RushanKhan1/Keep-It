import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';


function AddCard(props) {

    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");
    /* let [checked, setChecked] = useState(props.checked); */
    

    function handleTitleChange(event) {

	title = event.target.value;
	setTitle(title);
    }

    function handleBodyChange(event) {
	body = event.target.value;
	setBody(body);
    }



    let card = (
	<div onClick={() => {
	    props.onCheck();
	} } className="addCard">
	    <Zoom in={true}>
	    <div className="note">
		
		<h1>{ props.checked && <input type="text" onChange={handleTitleChange} value={title} placeholder="Title" name="noteHeading"></input> }</h1>
		
		<textarea type="text" onChange={handleBodyChange} value={body} placeholder="Take a note..." name="noteBody" rows="1"></textarea>
		
	{ props.checked &&
	  <Zoom in={true}>
	      <Fab style={{backgroundColor: "#f5ba13", color: "white", onHover: "#f0d68e"}} onClick={() => {
		  
		  props.onAdd(title, body);
		  setTitle("");
		  setBody("");
		  console.log(props.checked + "From AddNote.jsx")
		  
	      } } className="addButton"><AddIcon /></Fab> 
	  </Zoom>
	}
	  
	    </div>
	    </Zoom>
	</div>
    )
    return card;
}

export default AddCard;
