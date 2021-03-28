import React from 'react';
import {Calculator} from './calculator/calculator';



export class App extends React.Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div>
              <Calculator />
            </div>
        )
    }
}