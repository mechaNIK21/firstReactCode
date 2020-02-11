import React from 'react'
import style from './style.module.css'
import photo from './photo.png'
import gitPhoto from './gitPhoto.jpg'
import Button from '../Button/Button follow'
import SecondButton from '../Button/Button following'

export default () => {
    return(
        // eslint-disable-next-line no-unused-expressions
        <main>
            <div className = {style.mainControl}>
                <div className = {style.mainWindow}>
                    <div className = {style.profile}>
                        <h1>John Doe Profile</h1>
                        <hr></hr>
                        <a href="#">
                            <img src = {photo} alt = 'John Doe'></img>
                        </a>
                    </div>
                    <div className = {style.viewers}>
                    </div>
                    <div className = {style.gitPhoto}>
                        <img src = {gitPhoto} alt ='GitHub'></img>
                    </div>
                    <div className = {style.countControl}>
                        <Button name = 'Followers'></Button>
                        <SecondButton name = 'Following'></SecondButton>
                    </div>
                </div>
            </div>
        </main>
    )
}