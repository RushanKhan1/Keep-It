import React from "react"

let date = new Date()

let year = date.getFullYear();


function footer() {
    return <footer> Copyright ⓒ {year} <a href="https://github.com/RushanKhan1">Rushan Khan</a></footer>
}

export default footer;
