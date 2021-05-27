import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Note from "./components/Note.jsx"
import InputCard from "./components/AddNote.jsx"
import React, { useState } from "react";

function App() {

    let [items, setItem] = useState([]);
    let [checked, setChecked] = useState(false);
    let index = 0;


    function handleAdd(title, body) {
	setItem((prevValue) => {
	 return [...prevValue,
	    {key: ++index, title: title, content: body}]
	})
    }


    function handleDelete(id) {

	setItem((prevValue) => {
	    return prevValue.filter((item, index) => {
		return index !== id
	    })
	})
	console.log(items);
    }

    function unExpand() {
	setChecked(false);
	console.log(checked);
    }

    function expand() {
	setChecked(true);
	console.log(checked);
    }

    return (
	<div>
	    <div onClick={unExpand}>
		<Header />
	    </div>
	    <InputCard checked={checked} onAdd={handleAdd} onCheck={expand} />
	    <div onClick={unExpand}>
		{items.map((note, index) => {
		    return <Note noteTitle={note.title} noteContent={note.content} onDelete={handleDelete} id={index} /> 
		})
		}
	    </div>
	    <div onClick={unExpand}>
		<Footer />
	    </div>
	</div>);
}

export default App;
