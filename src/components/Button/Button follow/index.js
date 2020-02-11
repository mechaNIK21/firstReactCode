import React from 'react'
import style from './style.module.css'

export default (props) => {
    
    const [counterValue, setCounter] = React.useState(765)

    return(
        <div className = {style.buttons}>
            <span>{counterValue}</span>
            <span>Followers</span>
            <div className = {style.buttonValue}>
                <button onClick={() => setCounter(counterValue + 1) } >+</button>
                <button onClick={() => setCounter(counterValue - 1) } >-</button>  
            </div>

        </div>
    )
}