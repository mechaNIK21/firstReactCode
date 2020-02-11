import React from 'react'
import style from './style.module.css' 
import logo from './logo.png'




export default class Footer extends React.Component {
    
    
    // eslint-disable-next-line react/require-render-return
    render() {
        return(
            // eslint-disable-next-line no-unused-expressions
            <footer>
                <div className={style.footerControl}>
                    <span>365 Freebies. 007/365</span>
                    <img src = {logo} alt = 'Logo'></img>
                    <a href = "#" className = {style.profileHref}>@anakarenart</a>
                </div>
                <br></br>
            </footer>
        )
    }
}