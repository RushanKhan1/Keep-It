import React from "react"

let date = new Date()

let year = date.getFullYear();


function footer() {
    return <footer> Copyright ⓒ {year} </footer>
}

export default footer;
