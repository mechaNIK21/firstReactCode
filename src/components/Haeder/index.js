import React from 'react';
import style from './style.module.css'

export default class Header extends React.Component {
    
    render() {
        return(
            <header>
                <div className = {style.headControl}>
                    <div className={style.mainHeader}>
                        <p>Jonh Doe</p>
                    </div>
                </div>
            </header>
        )
    }
}