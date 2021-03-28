import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from './frontend/components/root';


document.addEventListener("DOMContentLoaded", () => {
    //console.log("hello")

    ReactDOM.render(<Root />, document.getElementById('root'));
})