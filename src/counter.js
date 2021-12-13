import React, { Component } from "react";
import { ThemeContext } from "./App";


export default class Counter extends Component {
    constructor( props ) {
        super( props )

        this.state = {
            count: props.initialCount,
        }
    }

    render() {
        console.log( "Render Counter Class")
        return (
            <ThemeContext.Consumer>
                { style => (
                        <>
                            <button style={style} onClick={ ()  => this.changeCount( -1 ) }>-</button>
                            <span>{this.state.count}</span>
                            <button style={style} onClick={ ()  => this.changeCount( 1 ) }>+</button>
                            <button onClick={ ()  => this.reset( ) }>Reset</button>
                        </>  
                    )
                }
            </ThemeContext.Consumer>
        );
    }

    changeCount( amount ) {
        this.setState( preState => { 
            return {
                count: preState.count + amount 
            } 
        })
    }

    reset( ) {
        this.setState( {
                count: 0
            } 
        )
    }
}