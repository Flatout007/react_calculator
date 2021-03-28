import React from 'react'
import {App} from './app'

export class Root extends React.Component {
     constructor() {
         super();
     }

     render() {
         return(
             <div>
                 <App />
             </div>
         )
     }
}