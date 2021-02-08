import React from 'react';
import './App.css';
import Calculator from "./components/Calculator";

export default class App extends React.Component {
    constructor() {
        super();
    }
    render () {
        return (
            <div>
                <h1>Calculator of the Future!</h1>
                <Calculator/>
            </div>
        );
    }
}